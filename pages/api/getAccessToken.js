export default async function handler(req, res) {

  const { code } = req.query;

  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const redirect_uri = process.env.NODE_ENV === "development" ? "http://localhost:3000" : null;
  
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri
    })
  });

  res.status(200).json({ response })

}