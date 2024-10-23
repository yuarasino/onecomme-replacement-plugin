import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Delete, DragIndicator, FileCopy } from "@mui/icons-material"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material"
import { useState } from "react"

import useReplacementStore from "../stores/useReplacementStore"

import type { ReplacementItem } from "@onecomme-replacement-plugin/common/src/types"

export type ReplacementListItemProps = {
  item: ReplacementItem
}

export default function ReplacementListItem({
  item,
}: ReplacementListItemProps) {
  const [open, setOpen] = useState(false)

  const { editingItem, selectItem, toggleItem, copyItem, deleteItem } =
    useReplacementStore()

  const {
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    setNodeRef,
    setActivatorNodeRef,
  } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  }

  const onDeleteItem = () => {
    deleteItem(item)
    setOpen(false)
  }

  return (
    <ListItem
      divider
      disablePadding
      style={style}
      ref={setNodeRef}
      secondaryAction={
        <>
          <IconButton onClick={() => copyItem(item)}>
            <FileCopy fontSize="small" />
          </IconButton>
          <IconButton edge="end" onClick={() => setOpen(true)}>
            <Delete fontSize="small" />
          </IconButton>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>確認</DialogTitle>
            <DialogContent>
              <DialogContentText>
                この設定を削除してもよろしいですか？
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>CANCEL</Button>
              <Button onClick={onDeleteItem}>OK</Button>
            </DialogActions>
          </Dialog>
        </>
      }
    >
      <ListItemButton
        selected={item.id === editingItem?.id}
        onClick={() => selectItem(item)}
      >
        <IconButton
          disableRipple
          edge="start"
          {...attributes}
          {...listeners}
          ref={setActivatorNodeRef}
          sx={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <DragIndicator fontSize="small" />
        </IconButton>
        <Switch
          size="small"
          checked={item.active}
          onChange={() => toggleItem(item)}
          sx={{ marginInline: 1 }}
        />
        <ListItemText
          primary={item.name}
          secondary={item.pattern.replaceAll("\n", ",")}
        />
      </ListItemButton>
    </ListItem>
  )
}
