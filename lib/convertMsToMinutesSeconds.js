export default function convertMsToMinutesSeconds(ms) {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}
