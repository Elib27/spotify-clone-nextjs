import getAccessToken from "./getAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'

export default async function getSearchResults(searchInput) {
  
  const { access_token } = await getAccessToken()

  const queryTypes = "track"
  const response = await fetch(`${SEARCH_ENDPOINT}?q=${searchInput}&type=${queryTypes}&offset=0&limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}