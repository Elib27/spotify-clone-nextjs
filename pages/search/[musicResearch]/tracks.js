import { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import TracksContainer from "../../../components/searchPage/TracksContainer"
import TrackItem from "../../../components/shared/TrackItem"
import NoResults from "../../../components/searchPage/NoResults"


export default function Tracks() {

  const [tracksData, setTracksData] = useState(null)
  const [likedTrackIds, setLikedTrackIds] = useState(null)

  const router = useRouter()
  const { musicResearch } = router.query

  async function getLikedTracksIds() {
    const response = await fetch('/api/getLikedTracks')
    const data = await response.json()
    const ids = data.map(track => track.id)
    setLikedTrackIds(ids)
  }

  async function refreshTracks(){
    const response = await fetch(`/api/getSearchResults/${musicResearch}/tracks`)
    const data = await response.json()
    setTracksData(data)
  }
  
  useEffect(() => {
    refreshTracks()
    getLikedTracksIds()
  }, [musicResearch])
  
  if (!tracksData) return (null)

  if (!tracksData?.length) {
    return (<NoResults searchValue={musicResearch}/>)
  }

  return (
    <TracksContainer columnTitles={['#', 'titre', 'album']} >
      {
        tracksData.map((track, index) => (
          <TrackItem
            key={track.id}
            title={track.name}
            artist={track.artist}
            album={track.album}
            id={track.id}
            cover_url={track.cover_url}
            explicit={track.explicit}
            duration={track.duration}
            number={index + 1}
            setLikedTrackIds={setLikedTrackIds}
            isLiked={likedTrackIds.current && likedTrackIds.includes(track.id)}
            addedDate={null}
          />
        ))
      }
    </TracksContainer>
  )
}

Tracks.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>