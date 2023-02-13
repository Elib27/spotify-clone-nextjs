const CATEGORIES_ENDPOINT = 'https://api.spotify.com/v1/browse/categories'

export default async function getCategories(access_token) {

  const response = await fetch(`${CATEGORIES_ENDPOINT}?limit=50`, { //country=FR&locale=fr_FR&
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  const data = await response.json()

  return data
}
