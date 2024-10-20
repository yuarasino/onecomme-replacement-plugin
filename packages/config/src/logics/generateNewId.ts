/**
 * 新規IDを生成する
 * @param existingIds 既存のID
 * @returns 新規ID
 */
export const generateNewId = (existingIds: string[]): string => {
  while (true) {
    const newId = Math.random().toString(36).substring(2).slice(-8)
    if (newId.length === 8 && !existingIds.includes(newId)) {
      return newId
    }
  }
}
