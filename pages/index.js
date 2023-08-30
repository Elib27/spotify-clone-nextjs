import { useState, useEffect, useRef } from 'react'
import useResizeObserver from '@/hooks/useResizeObserver'
import useFavoriteArtists from '@/hooks/useFavoriteArtists'
import useRecentlyPlayedTracks from '@/hooks/useRecentlyPlayedTracks'
import useNewAlbumReleases from '@/hooks/useNewAlbumReleases'
import useRecommandedArtists from '@/hooks/useRecommandedArtists'
import HomeLayout from '@/components/homePage/HomeLayout'
import HomeSection from '@/components/homePage/HomeSection'
import MusicCard from '@/components/shared/MusicCard'
import deduplicateDataById from '@/lib/deduplicateDataById'

export default function Home() {

  const WIDTH_LIMIT = 200
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)

  const { data: recentlyPlayedTracks } = useRecentlyPlayedTracks(20)
  const { data: favoriteArtists } = useFavoriteArtists(10)
  const { data: newAlbumReleases } = useNewAlbumReleases(20)
  const { data: recommandedArtists } = useRecommandedArtists(10)

  const recentlyPlayedAlbums = recentlyPlayedTracks && deduplicateDataById(recentlyPlayedTracks.map(track => track.album))

  useEffect(() => {
    const { width } = dimensions || { width: 900 }
    let cardsNumber = Math.floor(width / WIDTH_LIMIT)
    if (cardsNumber < 2) cardsNumber = 2
    else if (cardsNumber > 9) cardsNumber = 9
    setCardsNumberPerRow(cardsNumber)
  }, [dimensions])

  return (
    <HomeLayout>
      <div ref={containerRef}>
        {recentlyPlayedAlbums && (
          <HomeSection
            title="Écoutés récemment"
            cardsNumberPerRow={cardsNumberPerRow}
          >
            {recentlyPlayedAlbums.slice(0, cardsNumberPerRow).map((album) => (
              <MusicCard
                title={album.name}
                cover_url={album.image}
                description={album.artist}
                key={album.id}
              />
            ))}
          </HomeSection>
        )}
        {favoriteArtists && (
          <HomeSection
            title="Vos artistes préférés"
            cardsNumberPerRow={cardsNumberPerRow}
          >
            {favoriteArtists.slice(0, cardsNumberPerRow).map((artist) => (
              <MusicCard
                title={artist.name}
                cover_url={artist.image}
                description="Artiste"
                key={artist.id}
                isRoundImage
              />
            ))}
          </HomeSection>
        )}
        {newAlbumReleases && (
          <HomeSection
            title="Sorties récentes"
            cardsNumberPerRow={cardsNumberPerRow}
          >
            {newAlbumReleases.slice(0, cardsNumberPerRow).map((album) => (
              <MusicCard
                title={album.name}
                cover_url={album.image}
                description={album.artists}
                key={album.id}
              />
            ))}
          </HomeSection>
        )}
        {recommandedArtists && (
          <HomeSection
            title="Artistes recommandés"
            cardsNumberPerRow={cardsNumberPerRow}
          >
            {recommandedArtists.slice(0, cardsNumberPerRow).map((artist) => (
              <MusicCard
                title={artist.name}
                cover_url={artist.image}
                description="Artiste"
                key={artist.id}
                isRoundImage
              />
            ))}
          </HomeSection>
        )}
      </div>
    </HomeLayout>
  )
}