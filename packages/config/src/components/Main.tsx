import { Box, Toolbar } from "@mui/material"
import ReplacementEditor from "./ReplacementEditor"

export default function Main() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <ReplacementEditor />
    </Box>
  )
}
