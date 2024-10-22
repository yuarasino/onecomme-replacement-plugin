import { DndContext } from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { Box, Button, List, Toolbar, Typography } from "@mui/material"

import useReplacementStore from "../stores/useReplacementStore"
import ReplacementListItem from "./ReplacementListItem"

import type { DragEndEvent } from "@dnd-kit/core"

export default function ReplacementList() {
  const { items, addItem, moveItem } = useReplacementStore()

  const onMoveItem = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = items.findIndex((item) => item.id === over.id)
      moveItem(arrayMove(items, oldIndex, newIndex))
    }
  }

  return (
    <Box>
      <Toolbar
        variant="dense"
        sx={{ backgroundColor: "grey.100", boxShadow: 1, zIndex: 1 }}
      >
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          テキスト置換設定
        </Typography>
        <Button variant="outlined" size="small" onClick={() => addItem()}>
          追加
        </Button>
      </Toolbar>
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onMoveItem}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <List dense disablePadding sx={{ overflow: "auto" }}>
            {items.map((item) => (
              <ReplacementListItem key={item.id} item={item} />
            ))}
          </List>
        </SortableContext>
      </DndContext>
    </Box>
  )
}
