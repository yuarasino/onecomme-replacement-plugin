import { useReplacementContext } from "../hooks/useReplacementContext"

import { DndContext } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import Box from "@mui/material/Box"
import List from "@mui/material/List"

import ReplacementItem from "./ReplacementItem"

export default function ReplacementList() {
  const { replacementState, sortReplacement } = useReplacementContext()

  return (
    <DndContext
      onDragOver={({ active, over }) => {
        if (over && active.id !== over.id) {
          sortReplacement(active.id as string, over.id as string)
        }
      }}
    >
      <SortableContext items={replacementState.replacements}>
        <Box sx={{ overflow: "auto" }}>
          <List disablePadding sx={{ overflow: "hidden" }}>
            {replacementState.replacements.toReversed().map((replacement) => (
              <ReplacementItem key={replacement.id} replacement={replacement} />
            ))}
          </List>
        </Box>
      </SortableContext>
    </DndContext>
  )
}
