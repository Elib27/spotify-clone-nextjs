export default function convertDateToAddedDate(date) {
  const addedDate = new Date(date)
  const currentDate = new Date()
  const differenceInMs = currentDate - addedDate
  const dayInMilliseconds = 1000 * 3600 * 24;
  if (differenceInMs > dayInMilliseconds * 10) {
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const stringDate = addedDate.toLocaleDateString('fr-FR', dateOptions)
    return stringDate
  }
  if (differenceInMs > 1000 * 3600 * 24) {
    const days = Math.floor(differenceInMs / (1000 * 3600 * 24))
    return `${days} jours`
  }
}