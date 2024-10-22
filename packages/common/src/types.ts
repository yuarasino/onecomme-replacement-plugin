export type ReplacementItem = {
  id: string
  active: boolean
  name: string
  pattern: string
  image: string
  size: number
}

export type ReplacementConfig = {
  items: ReplacementItem[]
}

export type PluginConfig = {
  replacement: ReplacementConfig
}
