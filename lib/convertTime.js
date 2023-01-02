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
