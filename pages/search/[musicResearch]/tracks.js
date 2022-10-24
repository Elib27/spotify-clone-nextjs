import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import TracksContainer from "../../../components/searchPage/TracksContainer"
import TrackItem from "../../../components/shared/TrackItem"
import NoResults from "../../../components/searchPage/NoResults"


export default function Tracks() {

  const [fetchedData, setFetchedData] = useState()
  const loaderRef = useRef(null)
  
  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

  const router = useRouter()
  const { musicResearch } = router.query

  async function addNewTracksToList(){
    const response = await fetch(`/api/getSearchResults/${musicResearch}/tracks?offset=${fetchedData.trackOffset}`)
    const data = await response.json()
    const trackResults = [...fetchedData.trackResults, ...data.trackResults]
    const ids = trackResults.map(track => track.id)
    setFetchedData({
      ...data,
      trackResults: trackResults.filter(({id}, index) => !ids.includes(id, index + 1))
    })
    console.log(data)
  }

  useEffect(() => {
    async function getFirstTracks() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/tracks?offset=0`)
      const data = await response.json()
      setFetchedData(data)
      console.log(data)
    }
    getFirstTracks()

  }, [musicResearch])

  useEffect(() => {
    console.log(fetchedData?.trackOffset)
    if (fetchedData?.trackOffset == 1){
      addNewTracksToList()
    }
  }, [fetchedData])

  useEffect(() => {
    const observer = new IntersectionObserver(addNewTracksToList)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    console.log('refresh')

    return () => observer.disconnect()
  }, [])

  if (!fetchedData) return (null)

  if (!fetchedData?.trackResults?.length) {
    return (<NoResults searchValue={musicResearch}/>)
  }

  return (
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
    <div ref={loaderRef} />
    </TracksContainer>
  )
}

Tracks.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>


// probleme : trackOffset ne se met pas à jour
//            parfois, pas de reset

//plus tard: faire les requetes en même temps