export default function generateNewId(existingIds: string[]) {
  let newId: string
  while (true) {
    newId = Math.random().toString(36).substring(2).slice(-8)
    if (newId.length === 8 && !existingIds.includes(newId)) {
      break
    }
  }
  return newId
}
