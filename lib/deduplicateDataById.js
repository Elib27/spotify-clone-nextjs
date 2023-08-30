export default function deduplicateDataById(data) {
  if (!data) return null
  const ids = data.map(el => el.id)
  const deduplicatedData = data.filter(({ id }, index) => !ids.includes(id, index + 1))
  return deduplicatedData
}