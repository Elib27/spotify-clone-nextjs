import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import TracksContainer from "../../../components/searchPage/TracksContainer"
import TrackItem from "../../../components/shared/TrackItem"

const Container = styled.div`

`

export default function Tracks() {

  const [fetchedData, setFetchedData] = useState(null)
  
  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getResults() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/tracks`)
      const data = await response.json()
      setFetchedData(data)
    }
    getResults()
  }, [musicResearch])

  return (
    <Container>
      <TracksContainer columnTitles={['#', 'titre', 'album']} >
        { fetchedData?.trackResults && (
          fetchedData.trackResults.map((track, index) => (
            <div key={track.id}>
              <TrackItem
                title={track.name}
                artist={track.artist}
                album={track.album}
                cover_url={track.cover_url}
                explicit={track.explicit}
                duration={track.duration}
                number={index + 1}
              />
            </div>
          ))
        )}
      </TracksContainer>
    </Container>
  )
}

Tracks.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>

// prendre toute la largeur + gérer depassement titre et alignement