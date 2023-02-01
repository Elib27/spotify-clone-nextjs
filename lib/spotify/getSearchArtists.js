import getRefreshedAccessToken from "./getRefreshedAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'

export default async function getSearchArtists(searchInput, offset) {
  
  const { access_token } = await getRefreshedAccessToken()

  const queryType = "artist"
  const response = await fetch(`${SEARCH_ENDPOINT}?q=${searchInput}&type=${queryType}&offset=${offset}&limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}