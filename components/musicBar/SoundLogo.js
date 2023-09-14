import MutedVolume from '@/public/musicBar_logos/muted_volume.svg'
import LowVolume from '@/public/musicBar_logos/low_volume.svg'
import MediumVolume from '@/public/musicBar_logos/medium_volume.svg'
import HighVolume from '@/public/musicBar_logos/high_volume.svg'

export default function SoundLogo({ volumeCategory }) {
  if (volumeCategory === 'muted') return <MutedVolume />
  if (volumeCategory === 'low') return <LowVolume />
  if (volumeCategory === 'medium') return <MediumVolume />
  if (volumeCategory === 'high') return <HighVolume />
}