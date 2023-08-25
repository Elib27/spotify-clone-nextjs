import Tracks from '../../../data/musics_catalog.json'

export default async function handler(req, res) {
  const { index } = req.query
  if (index < 0 || index >= Tracks.length) {
    res.status(400).json({ error: 'Index out of range' })
  }
  else if (typeof parseInt(index, 10) !== 'number') {
    res.status(400).json({ error: 'Index must be a number' })
  }
  else {
    res.status(200).json({
      url: Tracks[index],
      index: index,
      maxIndex: Tracks.length - 1
    })
  }
}