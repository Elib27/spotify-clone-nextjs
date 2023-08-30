import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import useResizeObserver from '@/hooks/useResizeObserver'
import usePlaylists from '@/hooks/usePlaylists'
import useRecentlyPlayedTracks from '@/hooks/useRecentlyPlayedTracks'
import deduplicateDataById from '@/lib/deduplicateDataById'
import ShortcutButton from './ShortcutButton'

const ShortcutSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ $cardsNumberPerRow }) => $cardsNumberPerRow}, minmax(222px, 1fr));
  grid-gap: 16px 24px;
  padding-bottom: 20px;
`

export default function HomeShorcuts() {

  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(3)

  const { data: playlists } = usePlaylists(10)
  const { data: recentlyPlayedTracks } = useRecentlyPlayedTracks(10)

  useEffect(() => {
    const { width } = dimensions || { width: 900 }
    if (width < 850) {
      setCardsNumberPerRow(2)
    }
    else {
      setCardsNumberPerRow(3)
    }
  }, [dimensions])

  let playlistsLength = 2
  let recentlyPlayedTrackslength = 3

  if (playlists && recentlyPlayedTracks) {
    if (playlists.length + playlists.length < 6) {
      playlistsLength = playlists.length
      recentlyPlayedTrackslength = playlists.length
    }
    else if (playlists.length < 2) {
      playlistsLength = playlists.length
      recentlyPlayedTrackslength = 6 - playlists.length
    }
    else if (recentlyPlayedTracks.length < 3) {
      recentlyPlayedTrackslength = recentlyPlayedTracks.length
      playlistsLength = 6 - recentlyPlayedTracks.length
    }
  }

  return (
    <ShortcutSection
      ref={containerRef}
      $cardsNumberPerRow={cardsNumberPerRow}
    >
      {playlists && (
        <ShortcutButton
          title="Vos épisodes"
          link="/collection/episodes"
          isEpisodesCollection
        />
      )}
      {playlists && deduplicateDataById(playlists).slice(0, playlistsLength).map(playlist => (
        <ShortcutButton
          title={playlist.name}
          link={`/playlist/${playlist.id}`}
          cover_url={playlist.image}
          key={playlist.id}
        />
      ))}
      {recentlyPlayedTracks && deduplicateDataById(recentlyPlayedTracks).slice(0, recentlyPlayedTrackslength).map(track => (
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
