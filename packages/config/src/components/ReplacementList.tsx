import { useReplacementContext } from "../hooks/useReplacementContext"

import List from "@mui/material/List"

import ReplacementItem from "./ReplacementItem"

export default function ReplacementList() {
  const { replacementState } = useReplacementContext()

  return (
    <List disablePadding sx={{ overflow: "auto" }}>
      {replacementState.replacements.toReversed().map((replacement) => (
        <ReplacementItem key={replacement.id} replacement={replacement} />
      ))}
    </List>
  )
}
