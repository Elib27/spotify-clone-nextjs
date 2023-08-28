import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getSavedEpisodes from '@/lib/spotify/getSavedEpisodes'
import { convertMsToHourMinSecString } from '@/lib/convertTime'
import convertToEpisodeReleaseDate from '@/lib/convertToEpisodeReleaseDate'

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const response = await getSavedEpisodes(accessToken)
  const data = await response.json()

  const savedEpisodes = data.items.map(item => ({
    name: item.episode?.name,
    description: item.episode?.description,
    podcast: item.episode?.show?.name,
    publisher: item.episode?.show?.publisher,
    explicit: item.episode?.explicit,
    image: item.episode?.images?.[1]?.url ?? item.episode?.images?.[0]?.url,
    release_date: item.episode?.release_date && convertToEpisodeReleaseDate(item.episode.release_date),
    duration: item.episode?.duration_ms && convertMsToHourMinSecString(item.episode.duration_ms),
    id: item.episode?.id,
  }))

  res.status(200).json(savedEpisodes)
}