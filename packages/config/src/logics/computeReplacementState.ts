import { generateNewId } from "./generateNewId"

import type { Replacement } from "@onecomme-replacement-plugin/common/src/types"

import type { ReplacementState } from "../types"

/**
 * 置換設定読込時の状態を計算して返す
 * @param state 前の状態
 * @returns 今の状態
 */
export const computeOnLoadReplacement = (
  state: ReplacementState,
): ReplacementState => {
  return { ...state }
}

/**
 * 置換設定追加時の状態を計算して返す
 * @param state 前の状態
 * @returns 今の状態
 */
export const computeOnAddReplacement = (
  state: ReplacementState,
): ReplacementState => {
  const newReplacement: Replacement = {
    id: generateNewId(state.replacements.map((replacement) => replacement.id)),
    active: true,
    name: "ふぐ",
    pattern: "ふぐ\nフグ\n🐡",
    image: "fugu.png",
    size: 36,
  }
  return {
    replacements: [...state.replacements, newReplacement],
    editingId: newReplacement.id,
  }
}

/**
 * 置換設定有効化/無効化時の状態を計算して返す
 * @param state 前の状態
 * @returns 今の状態
 */
export const computeOnToggleReplacement = (
  state: ReplacementState,
  targetId: string,
): ReplacementState => {
  const targetIndex = state.replacements.findIndex(
    (replacement) => replacement.id === targetId,
  )
  if (targetIndex === -1) throw new Error()
  const newReplacement: Replacement = {
    ...state.replacements[targetIndex],
    active: true,
  }
  return {
    replacements: [
      ...state.replacements.slice(0, targetIndex),
      newReplacement,
      ...state.replacements.slice(targetIndex + 1),
    ],
    editingId: state.editingId,
  }
}

/**
 * 置換設定複製時の状態を計算して返す
 * @param state 前の状態
 * @returns 今の状態
 */
export const computeOnCopyReplacement = (
  state: ReplacementState,
  targetId: string,
): ReplacementState => {
  const targetIndex = state.replacements.findIndex(
    (replacement) => replacement.id === targetId,
  )
  if (targetIndex === -1) throw new Error()
  const newReplacement: Replacement = {
    ...state.replacements[targetIndex],
    id: generateNewId(state.replacements.map((replacement) => replacement.id)),
  }
  return {
    replacements: [...state.replacements, newReplacement],
    editingId: newReplacement.id,
  }
}

/**
 * 置換設定削除時の状態を計算して返す
 * @param state 前の状態
 * @returns 今の状態
 */
export const computeOnRemoveReplacement = (
  state: ReplacementState,
  targetId: string,
): ReplacementState => {
  const targetIndex = state.replacements.findIndex(
    (replacement) => replacement.id === targetId,
  )
  if (targetIndex === -1) throw new Error()

  return {
    replacements: [
      ...state.replacements.slice(0, targetIndex),
      ...state.replacements.slice(targetIndex + 1),
    ],
    editingId: state.editingId !== targetId ? state.editingId : "",
  }
}

/**
 * 置換設定保存時の状態を計算して返す
 * @param state 前の状態
 * @returns 今の状態
 */
export const computeOnSaveReplacement = (
  state: ReplacementState,
  targetId: string,
): ReplacementState => {
  const targetIndex = state.replacements.findIndex(
    (replacement) => replacement.id === targetId,
  )
  if (targetIndex === -1) throw new Error()
  const newReplacement: Replacement = {
    ...state.replacements[targetIndex],
  }
  return {
    replacements: [
      ...state.replacements.slice(0, targetIndex),
      newReplacement,
      ...state.replacements.slice(targetIndex + 1),
    ],
    editingId: state.editingId,
  }
}
