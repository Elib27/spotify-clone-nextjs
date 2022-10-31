import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import TracksContainer from "../../../components/searchPage/TracksContainer"
import TrackItem from "../../../components/shared/TrackItem"
import NoResults from "../../../components/searchPage/NoResults"


export default function Tracks() {

  const [fetchedData, setFetchedData] = useState()
  const [isLoading, setLoading] = useState(true)

  const observer = useRef(null)
  const loaderRef = useRef(null)
  
  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

  const router = useRouter()
  const { musicResearch } = router.query

  async function addNewTracks(isNewSearch){
    console.log('Tracks fetch')
    setLoading(true)
    const offset = isNewSearch ? 0 : fetchedData?.trackOffset
    const response = await fetch(`/api/getSearchResults/${musicResearch}/tracks?offset=${offset}`)
    const data = await response.json()
    if (isNewSearch) {
      setFetchedData(data)
    }
    else {
      const trackResults = [...fetchedData?.trackResults, ...data.trackResults]
      const ids = trackResults.map(track => track.id)
      setFetchedData({
        ...data,
        trackResults: trackResults.filter(({id}, index) => !ids.includes(id, index + 1))
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          const first = entries[0];
          if (first.isIntersecting) {
            addNewTracks(false)
          }
        })
    }
  }, [])

  useEffect(() => {
    addNewTracks(true)
  }, [musicResearch])

  useEffect(() => {
    if (loaderRef.current) {
      observer.current.observe(loaderRef.current)
    }
    return () => observer.current.disconnect()
  }, [isLoading])


  if (!fetchedData) return (null)

  if (!fetchedData?.trackResults?.length) {
    return (<NoResults searchValue={musicResearch}/>)
  }

  return (
    <TracksContainer columnTitles={['#', 'titre', 'album']} >
      {fetchedData?.trackResults && (
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
    <div ref={loaderRef}></div>
    </TracksContainer>
  )
}

Tracks.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>


// probleme : infinite scroll ne fonctionne pas
// fetchdata undefined alors que si dans le inspect component

// refresh ? 

// Résoudre bug 