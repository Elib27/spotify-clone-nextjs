export default async function refreshAccessToken(token) {
  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
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
        refresh_token: token.refreshToken
      })
    });
  
    const refreshedTokens = await response.json()
  
    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000
      // refreshToken: token.refreshToken
      // refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    }

  } catch (error) {

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}