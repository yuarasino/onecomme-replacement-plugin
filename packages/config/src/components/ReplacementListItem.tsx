import { Delete, DragIndicator, FileCopy } from "@mui/icons-material"
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material"

import useReplacementStore from "../stores/useReplacementStore"

import type { ChangeEvent } from "react"

import type { ReplacementItem } from "@onecomme-replacement-plugin/common/src/types"

export type ReplacementListItemProps = {
  item: ReplacementItem
}

export default function ReplacementListItem({
  item,
}: ReplacementListItemProps) {
  const { editingItem, selectItem, toggleItem, copyItem, deleteItem } =
    useReplacementStore()

  return (
    <ListItem
      divider
      disablePadding
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
        <DragIndicator fontSize="small" />
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
