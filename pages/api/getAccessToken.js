import getAccessToken from '../../lib/spotify/getAccessToken';

export default async function handler(req, res) {

  const data = await getAccessToken()
  const access_token = data.access_token

  res.status(200).json({ access_token })

}
