export type Replacement = {
  id: string
  active: boolean
  name: string
  pattern: string
  image: string
  size: number
}

export type Config = {
  replacements: Replacement[]
}
