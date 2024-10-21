import { useReplacementContext } from "../hooks/useReplacementContext"

import DeleteIcon from "@mui/icons-material/Delete"
import DragIndicator from "@mui/icons-material/DragIndicator"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Switch from "@mui/material/Switch"

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

  return (
    <ListItem
      disablePadding
      divider
      secondaryAction={
        <>
          <IconButton onClick={() => copyReplacement(replacement.id)}>
            <FileCopyIcon fontSize="small" />
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => deleteReplacement(replacement.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </>
      }
    >
      <ListItemButton
        dense
        selected={replacement.id === replacementState.editingId}
        onClick={() => selectReplacement(replacement.id)}
      >
        <DragIndicator fontSize="small" />
        <Switch
          size="small"
          checked={replacement.active}
          onChange={() => toggleReplacement(replacement.id)}
          sx={{ marginInline: 1 }}
        />
        <ListItemText
          primary={replacement.name}
          secondary={replacement.pattern.split("\n").join(",")}
        />
      </ListItemButton>
    </ListItem>
  )
}
