import getCurrentPlaying from '../../../lib/spotify/getCurrentPlaying'

export default async function handle(req, res) {

  const response = await getCurrentPlaying()
  const data = await response.json()
  const currentPlayingInfos = {
    name: data?.item?.name,
    artists: data?.item?.artists.map(artist => artist.name),
    isPlaying: data?.is_playing,
    explicit: data?.item?.explicit,
    id: data?.item?.id,
    type: data?.item?.type
  }

  res.status(200).json(currentPlayingInfos)
}