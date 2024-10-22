import { Drawer, Toolbar } from "@mui/material"

import ReplacementList from "./ReplacementList"

export default function Nav() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 360,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 360 },
      }}
    >
      <Toolbar />
      <ReplacementList />
    </Drawer>
  )
}
