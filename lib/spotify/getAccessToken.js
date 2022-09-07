import querystring from 'querystring';

export default async function getAccessToken() {

  const refresh_token = process.env.REFRESH_TOKEN;
  const basic = process.env.BASIC
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json()
}