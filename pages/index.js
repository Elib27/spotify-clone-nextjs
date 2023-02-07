import { useState, useEffect, useRef } from 'react'
import useResizeObserver from '../hooks/useResizeObserver'
import HomeLayout from '../components/homePage/HomeLayout'
import HomeSection from '../components/homePage/HomeSection'
import MusicCard from '../components/shared/MusicCard'

export default function Home() {

  const WIDTH_LIMIT = 200
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)
  const [favoriteArtists, setFavoriteArtists] = useState(null)
  const [recentlyPlayedAlbums, setRecentlyPlayedAlbums] = useState(null)
  const [recommandedArtists, setRecommandedArtists] = useState(null)
  const [newAlbumReleases, setNewAlbumReleases] = useState(null)

  useEffect(() => {
    const { width } = dimensions || {width: 900}
    let cardsNumber = Math.floor(width / WIDTH_LIMIT)
    if (cardsNumber < 2) cardsNumber = 2
    else if (cardsNumber > 9) cardsNumber = 9
    setCardsNumberPerRow(cardsNumber)
  }, [dimensions])

  useEffect(() => {
    async function getRecentlyPlayed() {
      const response = await fetch('/api/getRecentlyPlayed')
      const data = await response.json()
      const albumsIds = data.map(track => track.album.id)
      const recentlyPlayedAlbumsData = data.map(track => track.album).filter(({id}, index) => !albumsIds.includes(id, index + 1))
      setRecentlyPlayedAlbums(recentlyPlayedAlbumsData)
    }
    async function getFavoriteArtists() {
      const response = await fetch('/api/getTopArtists')
      const data = await response.json()
      setFavoriteArtists(data)
    }
    async function getNewAlbumReleases() {
      const response = await fetch('/api/getNewAlbumReleases')
      const data = await response.json()
      setNewAlbumReleases(data)
    }
    getNewAlbumReleases()
    getRecentlyPlayed()
    getFavoriteArtists()
  }, [])

  useEffect(() => {
    async function getRecommandedArtists() {
      if (favoriteArtists) {
        const getRecommandedArtistsFromId = async (id) => {
          const response = await fetch(`/api/getRecommandedArtists?artist_id=${id}`)
          const data = await response.json()
          return data
        }
        Promise.all(Array.from(favoriteArtists.slice(0,4), ({ id }) => getRecommandedArtistsFromId(id)))
        .then((data) => {
          const artists = data.map(arr => arr.slice(0, 4)).flat()
          const artistsIds = artists.map(artist => artist.id)
          const noDuplicatedArtists = artists.filter(({id}, index) => !artistsIds.includes(id, index + 1))
          setRecommandedArtists(noDuplicatedArtists)
        })
      }
    }
    getRecommandedArtists()
  }, [favoriteArtists])

  return (
    <HomeLayout>
      <div ref={containerRef}>
        {recentlyPlayedAlbums && (
          <HomeSection
              title="Écoutés récemment"
              cardsNumberPerRow={cardsNumberPerRow}
          >
            {recentlyPlayedAlbums.map((album, index) => (
              index < (cardsNumberPerRow) && (
                <MusicCard
                  title={album.name}
                  cover_url={album.image}
                  description={album.artist}
                  key={album.id}
                />
              )
            ))}
          </HomeSection>
        )}
        {favoriteArtists && (
          <HomeSection
            title="Vos artistes préférés"
            cardsNumberPerRow={cardsNumberPerRow}
          >
            {favoriteArtists.map((artist, index) => (
              index < (cardsNumberPerRow) && (
                <MusicCard
                  title={artist.name}
                  cover_url={artist.image}
                  description="Artiste"
                  key={artist.id}
                  isRoundImage
                />
              )
            ))}
          </HomeSection>
        )}
        {newAlbumReleases && (
          <HomeSection
            title="Sorties récentes"
            cardsNumberPerRow={cardsNumberPerRow}
          >
            {newAlbumReleases.map((album, index) => (
              index < (cardsNumberPerRow) && (
                <MusicCard
                  title={album.name}
                  cover_url={album.image}
                  description={album.artists}
                  key={album.id}
                />
              )
            ))}
          </HomeSection>
        )}
        {recommandedArtists && (
          <HomeSection
            title="Artistes recommandés"
            cardsNumberPerRow={cardsNumberPerRow}
          >
            {recommandedArtists.map((artist, index) => (
              index < (cardsNumberPerRow) && (
                <MusicCard
                  title={artist.name}
                  cover_url={artist.image}
                  description="Artiste"
                  key={artist.id}
                  isRoundImage
                />
              )
            ))}
          </HomeSection>
        )}
      </div>
    </HomeLayout>
  )
}