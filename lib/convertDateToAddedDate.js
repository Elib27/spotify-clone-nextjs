export default function convertDateToAddedDate(date) {
  const addedDate = new Date(date)
  const currentDate = new Date()
  const differenceInMs = currentDate - addedDate
  const dayInMilliseconds = 1000 * 3600 * 24;
  const hourInMilliseconds = 1000 * 3600;
  const minuteInMilliseconds = 1000 * 60;
  if (differenceInMs > dayInMilliseconds * 30) {
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const stringDate = addedDate.toLocaleDateString('fr-FR', dateOptions)
    return stringDate
  }
  else if (differenceInMs > dayInMilliseconds) {
    const days = Math.floor(differenceInMs / dayInMilliseconds) + 1
    return `il y a ${days} jours`
  }
  else if (differenceInMs > hourInMilliseconds) {
    const hours = Math.floor(differenceInMs / hourInMilliseconds)
    return `il y a ${hours} heures`
  }
  else if (differenceInMs > minuteInMilliseconds) {
    const minutes = Math.floor(differenceInMs / minuteInMilliseconds)
    return `il y a ${minutes} minutes`
  }
  else {
    const seconds = Math.floor(differenceInMs / 1000)
    return `il y a ${seconds} secondes`
  }
 
}