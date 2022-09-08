import getAccessToken from "./getAccessToken";

export default async function getCategories() {

  const CATEGORIES_ENDPOINT = 'https://api.spotify.com/v1/browse/categories'

  const { access_token } = await getAccessToken()

  const response = await fetch(`${CATEGORIES_ENDPOINT}?country=FR&locale=fr_FR&limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  const data = await response.json()

  return data.categories.items

}
