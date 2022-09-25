import styled from 'styled-components'
import CollectionPageContainer from "../../../components/collection/CollectionPageContainer"
import PlaylistBigCard from '../../../components/collection/PlaylistBigCard'
import PlaylistCard from '../../../components/collection/PlaylistCard'

const exampleTracks = [
  {title: 'Vettel', artist: 'Mister V'},
  {title: 'Journal Perso II', artist: 'Vald'},
  {title: 'Top album', artist: 'Mister V'},
  {title: 'Vettel', artist: 'Mister V'},
  {title: 'Vettel', artist: 'Mister V'},
  {title: 'Journal Perso II', artist: 'Vald'},
  {title: 'Top album', artist: 'Mister V'},
  {title: 'Journal Perso II', artist: 'Vald'},
  {title: 'Top album', artist: 'Mister V'},
]

export default function Podcasts() {
  return (
    <CollectionPageContainer title="Podcasts">
      <PlaylistBigCard
        isEpisodes
        tracks={exampleTracks}
        tracksNumber={4}
      />
      <PlaylistCard
        cover_url="https://i.scdn.co/image/ab67656300005f1fb969baea8ebad840ae2baec6"
        title="TechOut"
        description="Emakina/influx"
        noPlayingButton
        />
      <PlaylistCard
        cover_url="https://i.scdn.co/image/ab67656300005f1fb969baea8ebad840ae2baec6"
        title="TechOut"
        description="Emakina/influx"
        noPlayingButton
        />
      <PlaylistCard
        cover_url="https://i.scdn.co/image/ab67656300005f1fb969baea8ebad840ae2baec6"
        title="TechOut"
        description="Emakina/influx"
        noPlayingButton
        />
      <PlaylistCard
        cover_url="https://i.scdn.co/image/ab67656300005f1fb969baea8ebad840ae2baec6"
        title="TechOut"
        description="Emakina/influx"
        noPlayingButton
        />
    </CollectionPageContainer>
  )
}