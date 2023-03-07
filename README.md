# NEXT JS Spotify Clone

This website is a Spotify Clone where you can login with your spotify account and see your playlists, your top tracks, your recently played tracks, your followed artists and your library. You can also add liked tracks and listen to music with a custom player.

The technologies used in this project are the following:
- React
- Next JS
- NextAuth
- Redux Toolkit
- Styled Components
- Spotify API

## Deployment

You can visit the production deployment on Vercel with the following link:

https://spotify-clone-nextjs-elib27.vercel.app

The website will be able to :
- read your playlists (collaborative and private)
- read and modify your library
- read your recently played tracks
- read your top tracks
- read your followed artists
- read your private informations

## How to run locally

If you want to run this project locally, you will have to follow these steps:

1. Clone the repository

2. Create a spotify app and get the client id and client secret:

    In order to use the Spotify API, you need to create a spotify account and create a spotify app to get the client id and the client secret: https://developer.spotify.com/dashboard

    Edit the application settings and add the following redirect uri: `http://localhost:3000/api/auth/callback/spotify`

3. Create a .env.local file in the root of the project and add the following environment variables:

| Env Variable | Value |
|------------------|--------------|
| SPOTIFY_CLIENT_ID | *Your spotify client id* |
| SPOTIFY_CLIENT_SECRET | *Your spotify client secret* |
| NEXT_PUBLIC_SCOPE | *playlist-read-collaborative playlist-read-private user-library-read user-library-modify user-read-recently-played user-read-private user-top-read user-follow-read* |
| NEXTAUTH_URL | *http://localhost:3000* |
| NEXTAUTH_SECRET | *Your NextAuth Secret* |

4. Install the dependencies with `npm install`

5. Run the project with `npm run dev` or `npm run build` and `npm run start`