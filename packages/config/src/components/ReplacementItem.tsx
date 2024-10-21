import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { useReplacementContext } from "../hooks/useReplacementContext"

import DeleteIcon from "@mui/icons-material/Delete"
import DragIndicator from "@mui/icons-material/DragIndicator"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Switch from "@mui/material/Switch"

import type { CSSProperties } from "react"

import type { Replacement } from "@onecomme-replacement-plugin/common/src/types"

type Props = {
  replacement: Replacement
}

export default function ReplacementItem({ replacement }: Props) {
  const {
    replacementState,
    selectReplacement,
    toggleReplacement,
    copyReplacement,
    deleteReplacement,
  } = useReplacementContext()

  const {
    attributes,
    listeners,
    transform,
    transition,
    setActivatorNodeRef,
    setNodeRef,
  } = useSortable({ id: replacement.id })

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  }

  return (
    <ListItem
      disablePadding
      divider
      ref={setNodeRef}
      style={style}
      secondaryAction={
        <Box>
          <IconButton onClick={() => copyReplacement(replacement.id)}>
            <FileCopyIcon fontSize="small" />
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => deleteReplacement(replacement.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      }
    >
      <ListItemButton
        dense
        selected={replacement.id === replacementState.editingId}
        onClick={() => selectReplacement(replacement.id)}
      >
        <Box {...attributes} {...listeners} ref={setActivatorNodeRef}>
          <DragIndicator fontSize="small" />
        </Box>
        <Switch
          size="small"
          checked={replacement.active}
          onChange={() => toggleReplacement(replacement.id)}
          sx={{ marginInline: 1 }}
        />
        <ListItemText
          primary={replacement.id}
          secondary={replacement.pattern.split("\n").join(",")}
        />
      </ListItemButton>
    </ListItem>
  )
}
