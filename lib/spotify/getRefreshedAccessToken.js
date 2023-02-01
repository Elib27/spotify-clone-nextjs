export default async function getRefreshedAccessToken() {

  // This feature is not used, the initial access token is valid for 1 hour, we don't need to refresh it

  const refresh_token = process.env.REFRESH_TOKEN;
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json()
}