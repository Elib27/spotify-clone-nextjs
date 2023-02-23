const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'

export default async function getSearchAlbums(access_token, searchInput, offset) {

  const queryType = "album"
  const response = await fetch(`${SEARCH_ENDPOINT}?q=${searchInput}&type=${queryType}&offset=${offset}&limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}