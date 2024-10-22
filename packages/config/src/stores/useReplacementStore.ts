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
  const newItem = {
    id: generateNewId(items.map((item) => item.id)),
    active: true,
    name: "ふぐ",
    pattern: "ふぐ\nフグ\n🐡",
    image: "fugu.png",
    size: 36,
  }
  set(itemsAtom, [newItem, ...items])
  set(editingItemAtom, newItem)
})

export const moveItemAtom = atom(null, (_, set, value: ReplacementItem[]) => {
  set(itemsAtom, value)
})

export const selectItemAtom = atom(null, (_, set, value: ReplacementItem) => {
  const newItem = { ...value }
  set(editingItemAtom, newItem)
})

export const toggleItemAtom = atom(null, (get, set, value: ReplacementItem) => {
  const items = get(itemsAtom)
  const newItem = { ...value, active: !value.active }
  set(
    itemsAtom,
    items.map((item) => (item.id === value.id ? newItem : item)),
  )
})

export const copyItemAtom = atom(null, (get, set, value: ReplacementItem) => {
  const items = get(itemsAtom)
  const newItem = {
    ...value,
    id: generateNewId(items.map((item) => item.id)),
    active: true,
  }
  set(itemsAtom, [newItem, ...items])
  set(editingItemAtom, newItem)
})

export const deleteItemAtom = atom(null, (get, set, value: ReplacementItem) => {
  const items = get(itemsAtom)
  const editingItem = get(editingItemAtom)
  set(
    itemsAtom,
    items.filter((item) => item.id !== value.id),
  )
  set(editingItemAtom, editingItem?.id !== value.id ? editingItem : undefined)
})

export const editItemAtom = atom(null, (get, set, value: ReplacementItem) => {
  const items = get(itemsAtom)
  const newItem = {
    ...value,
    pattern: value.pattern.trim(),
  }
  set(
    itemsAtom,
    items.map((item) => (item.id === value.id ? newItem : item)),
  )
  set(editingItemAtom, newItem)
})

export default function useReplacementStore() {
  const replacement = useAtomValue(replacementAtom)
  const items = useAtomValue(itemsAtom)
  const editingItem = useAtomValue(editingItemAtom)
  const addItem = useSetAtom(addItemAtom)
  const moveItem = useSetAtom(moveItemAtom)
  const selectItem = useSetAtom(selectItemAtom)
  const toggleItem = useSetAtom(toggleItemAtom)
  const copyItem = useSetAtom(copyItemAtom)
  const deleteItem = useSetAtom(deleteItemAtom)
  const editItem = useSetAtom(editItemAtom)

  return useMemo(
    () => ({
      replacement,
      items,
      editingItem,
      addItem,
      moveItem,
      selectItem,
      toggleItem,
      copyItem,
      deleteItem,
      editItem,
    }),
    [
      replacement,
      items,
      editingItem,
      addItem,
      moveItem,
      selectItem,
      toggleItem,
      copyItem,
      deleteItem,
      editItem,
    ],
  )
}
