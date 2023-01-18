import getSavedEpisodes from "../../lib/spotify/getSavedEpisodes"
import { convertMsToMinutesSeconds } from "../../lib/convertTime"
import convertDateToAddedDate from "../../lib/convertDateToAddedDate"

export default async function handler(req, res) {

  const response = await getSavedEpisodes()
  const data = await response.json()

  const savedEpisodes = data.items.map(item => ({
    name: item.episode?.name,
    description: item.episode?.description,
    podcast: item.episode?.show?.name,
    publisher: item.episode?.show?.publisher,
    explicit: item.episode?.explicit,
    image: item.episode?.images?.[1]?.url ?? item.episode?.images?.[0]?.url,
    addedDate: item?.added_at && convertDateToAddedDate(item.added_at),
    duration: item.episode?.duration_ms && convertMsToMinutesSeconds(item.episode.duration_ms),
    id: item.episode?.id,
  }))

  res.status(200).json(savedEpisodes)
}