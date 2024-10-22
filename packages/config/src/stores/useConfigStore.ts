import { atom, useAtomValue, useSetAtom } from "jotai"
import { useMemo } from "react"

import type { PluginConfig } from "@onecomme-replacement-plugin/common/src/types"

export const configAtom = atom({
  replacement: { items: [] },
} as PluginConfig)

export const loadConfigAtom = atom(null, (_, set, config: PluginConfig) => {
  set(configAtom, config)
})

export default function useConfigStore() {
  const config = useAtomValue(configAtom)
  const loadConfig = useSetAtom(loadConfigAtom)

  return useMemo(
    () => ({
      config,
      loadConfig,
    }),
    [config, loadConfig],
  )
}
