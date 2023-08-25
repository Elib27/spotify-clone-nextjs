import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import useResizeObserver from '../../hooks/useResizeObserver'
import ShortcutButton from './ShortcutButton'

const ShortcutSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ cardsNumberPerRow }) => cardsNumberPerRow}, minmax(222px, 1fr));
  grid-gap: 16px 24px;
  padding-bottom: 20px;
`

export default function HomeShorcuts() {

  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(3)
  const [playlists, setPlaylists] = useState(null)
  const [recentlyPlayed, setRecentlyPlayed] = useState(null)

  useEffect(() => {
    const { width } = dimensions || { width: 900 }
    if (width < 850) {
      setCardsNumberPerRow(2)
    }
    else {
      setCardsNumberPerRow(3)
    }
  }, [dimensions])

  useEffect(() => {
    async function getPlaylists() {
      const response = await fetch('/api/getPlaylists')
      const data = await response.json()
      const ids = data.map(track => track.id)
      const noDuplicatedData = data.filter(({ id }, index) => !ids.includes(id, index + 1))
      setPlaylists(noDuplicatedData)
    }
    async function getRecentlyPlayed() {
      const response = await fetch('/api/getRecentlyPlayed')
      const data = await response.json()
      const ids = data.map(track => track.id)
      const noDuplicatedData = data.filter(({ id }, index) => !ids.includes(id, index + 1))
      setRecentlyPlayed(noDuplicatedData)
    }
    getPlaylists()
    getRecentlyPlayed()
  }, [])

  let playlistsLength = 2
  let recentlyPlayedlength = 3

  if (playlists && recentlyPlayed) {
    if (playlists.length + playlists.length < 6) {
      playlistsLength = playlists.length
      recentlyPlayedlength = playlists.length
    }
    else if (playlists.length < 2) {
      playlistsLength = playlists.length
      recentlyPlayedlength = 6 - playlists.length
    }
    else if (recentlyPlayed.length < 3) {
      recentlyPlayedlength = recentlyPlayed.length
      playlistsLength = 6 - recentlyPlayed.length
    }
  }

  return (
    <ShortcutSection
      ref={containerRef}
      cardsNumberPerRow={cardsNumberPerRow}
    >
      {playlists && (
        <ShortcutButton
          title="Vos épisodes"
          link="/collection/episodes"
          isEpisodesCollection
        />
      )}
      {playlists && playlists.slice(0, playlistsLength).map(playlist => (
        <ShortcutButton
          title={playlist.name}
          link={`/playlist/${playlist.id}`}
          cover_url={playlist.image}
          key={playlist.id}
        />
      ))}
      {recentlyPlayed && recentlyPlayed.slice(0, recentlyPlayedlength).map(track => (
        <ShortcutButton
          title={track.name}
          cover_url={track.album.image}
          link={`/album/${track.album.id}`}
          key={track.id}
        />
      ))}
    </ShortcutSection>
  )
}
