export function convertMsToMinutesSeconds(timeInMs) {
  const min = Math.floor(timeInMs / 60000)
  const sec = Math.floor((timeInMs % 60000) / 1000).toString().padStart(2, '0')
  return `${min}:${sec}`
}

export function convertSecondsToMinutesSeconds(timeInSeconds) {
  const min = Math.floor(timeInSeconds / 60).toString().padStart(1, '0')
  const sec = Math.floor(timeInSeconds % 60).toString().padStart(2, '0')
  return`${min}:${sec}`
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