import getRawTrackInformations from "../../lib/spotify/getRawTrackInformations"

export default async function getTrackInformations(req, res) {

  const { id } = req.query

  const response = await getRawTrackInformations(id)

  const data = await response.json()

  const track = {
    name: data?.name,
    image: data?.album?.images[0]?.url,
    artists: data?.artists.map(artist => ({
      name: artist?.name,
      id: artist?.id,
      href: artist?.href,
    })),
    album: {
      name: data?.album?.name,
      id: data?.album?.id,
      href: data?.album?.href,
    }
  }

  res.status(200).json(track)
}