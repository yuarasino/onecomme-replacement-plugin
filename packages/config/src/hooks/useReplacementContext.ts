import { useMemo } from "react"
import { atom, useRecoilState } from "recoil"
import {
  computeOnAddReplacement,
  computeOnCopyReplacement,
  computeOnDeleteReplacement,
  computeOnLoadReplacement,
  computeOnSaveReplacement,
  computeOnSelectReplacement,
  computeOnToggleReplacement,
} from "../logics/computeReplacementState"

import type { ReplacementState } from "../types"

type ReplacementContext = {
  replacementState: ReplacementState
  loadReplacement: () => void
  addReplacement: () => void
  selectReplacement: (targetId: string) => void
  toggleReplacement: (targetId: string) => void
  copyReplacement: (targetId: string) => void
  deleteReplacement: (targetId: string) => void
  saveReplacement: (targetId: string) => void
}

const replacementAtom = atom<ReplacementState>({
  key: "replacement",
  default: {
    replacements: [],
    editingId: "",
  },
})

export const useReplacementContext = (): ReplacementContext => {
  const [state, setState] = useRecoilState(replacementAtom)

  return useMemo<ReplacementContext>(
    () => ({
      replacementState: state,
      loadReplacement: () => setState(computeOnLoadReplacement(state)),
      addReplacement: () => setState(computeOnAddReplacement(state)),
      selectReplacement: (targetId) =>
        setState(computeOnSelectReplacement(state, targetId)),
      toggleReplacement: (targetId) =>
        setState(computeOnToggleReplacement(state, targetId)),
      copyReplacement: (targetId) =>
        setState(computeOnCopyReplacement(state, targetId)),
      deleteReplacement: (targetId) =>
        setState(computeOnDeleteReplacement(state, targetId)),
      saveReplacement: (targetId) =>
        setState(computeOnSaveReplacement(state, targetId)),
    }),
    [state, setState],
  )
}
