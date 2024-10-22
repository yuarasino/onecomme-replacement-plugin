import { atom, useAtomValue, useSetAtom } from "jotai"
import { focusAtom } from "jotai-optics"
import { useMemo } from "react"

import generateNewId from "../utils/generateNewId"
import { configAtom } from "./useConfigStore"

import type { ReplacementItem } from "@onecomme-replacement-plugin/common/src/types"

export const replacementAtom = focusAtom(configAtom, (optic) =>
  optic.prop("replacement"),
)

export const itemsAtom = focusAtom(replacementAtom, (optic) =>
  optic.prop("items"),
)

export const editingItemAtom = atom(undefined as ReplacementItem | undefined)

export const addItemAtom = atom(null, (get, set) => {
  const items = get(itemsAtom)
  const newItem: ReplacementItem = {
    id: generateNewId(items.map((item) => item.id)),
    active: true,
    name: "ふぐ",
    pattern: "ふぐ\nフグ\n🐡",
    image: "fugu.png",
    size: 36,
  }
  set(itemsAtom, [...items, newItem])
  set(editingItemAtom, newItem)
})

export default function useReplacementStore() {
  const replacement = useAtomValue(replacementAtom)
  const items = useAtomValue(itemsAtom)
  const editingItem = useAtomValue(editingItemAtom)
  const addItem = useSetAtom(addItemAtom)

  return useMemo(
    () => ({
      replacement,
      items,
      editingItem,
      addItem,
    }),
    [replacement, items, editingItem, addItem],
  )
}
