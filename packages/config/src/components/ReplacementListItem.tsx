import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Delete, DragIndicator, FileCopy } from "@mui/icons-material"
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material"

import useReplacementStore from "../stores/useReplacementStore"

import type { ReplacementItem } from "@onecomme-replacement-plugin/common/src/types"

export type ReplacementListItemProps = {
  item: ReplacementItem
}

export default function ReplacementListItem({
  item,
}: ReplacementListItemProps) {
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
          <IconButton edge="end" onClick={() => deleteItem(item)}>
            <Delete fontSize="small" />
          </IconButton>
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
