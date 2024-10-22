export default function generateNewId(existingIds: string[]) {
  while (true) {
    const newId = Math.random().toString(36).substring(2).slice(-8)
    if (newId.length === 8 && !existingIds.includes(newId)) return newId
  }
}
