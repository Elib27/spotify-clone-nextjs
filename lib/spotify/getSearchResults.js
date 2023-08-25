const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'

export default async function getSearchResults(access_token, searchInput) {

  const queryTypes = "track,album,artist,episode,playlist,show"
  const response = await fetch(`${SEARCH_ENDPOINT}?q=${searchInput}&type=${queryTypes}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}