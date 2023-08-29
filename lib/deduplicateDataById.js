export default function deduplicateDataById(data) {
  const ids = data.map(track => track.id)
  const deduplicatedData = data.filter(({ id }, index) => !ids.includes(id, index + 1))
  return deduplicatedData
}