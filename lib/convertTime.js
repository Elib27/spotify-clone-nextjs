export function convertMsToMinutesSeconds(timeInMs) {
  const MS_IN_HOUR = 3600 * 1000
  const MS_IN_MIN = 60 * 1000
  const hours = Math.floor(timeInMs / MS_IN_HOUR)
  const minutes = Math.floor((timeInMs % MS_IN_HOUR) / MS_IN_MIN)
  const secondes = Math.floor((timeInMs % MS_IN_MIN) / 1000).toString().padStart(2, '0')
  if (hours === 0) {
    return `${minutes}:${secondes}`
  }
  const padMinutes = minutes.toString().padStart(2, '0')
  return `${hours}:${padMinutes}:${secondes}`
}

export function convertSecondsToMinutesSeconds(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(1, '0')
  const secondes = Math.floor(timeInSeconds % 60).toString().padStart(2, '0')
  return `${minutes}:${secondes}`
}

export function convertMsToHourMinSecString(timeInMs) {
  const MS_IN_HOUR = 3600 * 1000
  const MS_IN_MIN = 60 * 1000
  const hours = Math.floor(timeInMs / MS_IN_HOUR)
  const minutes = Math.floor((timeInMs % MS_IN_HOUR) / MS_IN_MIN)
  const seconds = Math.floor(((timeInMs % MS_IN_HOUR) % MS_IN_MIN) / 1000)
  if (hours === 0) {
    return `${minutes} m ${seconds} s`
  }
  return `${hours} h ${minutes} min`
}