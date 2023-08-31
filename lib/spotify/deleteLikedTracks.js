const ENDPOINT = 'https://api.spotify.com/v1/me/tracks'

export default async function deleteLikedTracks(access_token, ids) {

  await fetch(`${ENDPOINT}?ids=${ids}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  })
}