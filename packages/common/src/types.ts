export type ReplacementConfig = {
  id: string
  name: string
  active: boolean
  pattern: string
  image: string
  size: string
}

export type PluginConfig = {
  replacementConfigs: ReplacementConfig[]
}
