import { atom, useAtomValue, useSetAtom } from "jotai"
import { useMemo } from "react"

import type { PluginConfig } from "@onecomme-replacement-plugin/common/src/types"

export const configAtom = atom({
  replacement: { items: [] },
} as PluginConfig)

export const loadConfigAtom = atom(null, (_, set) => {
  const json = localStorage.getItem("config")
  if (json) {
    const config = JSON.parse(json) as PluginConfig
    set(configAtom, config)
  }
})

export const saveConfigAtom = atom(null, (get, _) => {
  const config = get(configAtom)
  const json = JSON.stringify(config)
  localStorage.setItem("config", json)
})

export default function useConfigStore() {
  const config = useAtomValue(configAtom)
  const loadConfig = useSetAtom(loadConfigAtom)
  const saveConfig = useSetAtom(saveConfigAtom)

  return useMemo(
    () => ({
      config,
      loadConfig,
      saveConfig,
    }),
    [config, loadConfig, saveConfig],
  )
}
