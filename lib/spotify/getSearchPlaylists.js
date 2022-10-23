import getAccessToken from "./getAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'

export default async function getSearchPlaylists(searchInput, offset) {
  
  const { access_token } = await getAccessToken()

  const queryType = "playlist"
  const response = await fetch(`${SEARCH_ENDPOINT}?q=${searchInput}&type=${queryType}&offset=${offset}&limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}