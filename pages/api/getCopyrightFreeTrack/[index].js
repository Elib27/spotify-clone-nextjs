import Tracks from '@/data/musics_catalog.json'

export default async function handler(req, res) {
  const { index } = req.query
  const indexInt = parseInt(index, 10)
  if (indexInt === NaN) {
    res.status(400).json({ error: 'Index must be a number' })
  }
  else if (indexInt < 0 || indexInt >= Tracks.length) {
    res.status(400).json({ error: 'Index out of range' })
  }
  else {
    res.status(200).json({
      url: Tracks[index],
      index: indexInt,
      maxIndex: Tracks.length - 1
    })
  }
}