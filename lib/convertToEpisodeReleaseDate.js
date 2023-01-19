export default function convertToEpisodeReleaseDate(stringDate) {
  
  if (!stringDate) return null

  const release_date = new Date(stringDate)
  const current_date = new Date()

  if ((current_date.getMonth() === release_date.getMonth()) && (current_date.getFullYear() === release_date.getFullYear())) {
    return release_date.toLocaleDateString('fr-FR', { day:'numeric', month: 'short'})
  }

  return release_date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short'})
}