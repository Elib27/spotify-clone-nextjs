import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import TracksContainer from "../../../components/shared/TracksContainer"
import LikedTrack from "../../../components/collection/LikedTrack"

const Container = styled.div`

`

export default function Tracks() {

  const [fetchedData, setFetchedData] = useState(null)
  
  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getResults() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}`)
      const data = await response.json()
      setFetchedData(data[0])
      console.log(data[0])
    }
    getResults()
  }, [musicResearch])

  return (
    <Container>
      <TracksContainer columnTitles={['#', 'titre', 'album', 'ajouté le']} >
        { fetchedData?.tracks && (
          fetchedData.tracks.map((track, index) => {
            <div key={track.id}>
              <LikedTrack
                title={track.name}
                artist={track.artist}
                album={track.album}
                cover_url={track.cover_url}
                explicit={track.explicit}
                addedDate={3}
                duration={track.duration}
                number={index}
              />
            </div>
          })
        )}
        <LikedTrack
          title="Top album"
          artist="Mister V"
          album="Double V"
          cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
          explicit={true}
          addedDate={3}
          duration="3:12"
          number={1}
        />
      </TracksContainer>
    </Container>
  )
}

Tracks.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
