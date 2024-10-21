import { colors } from "@mui/material"

import { Button, Drawer, Toolbar, Typography } from "@mui/material"

export default function Nav() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 360,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 360, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Toolbar
        variant="dense"
        sx={{ backgroundColor: colors.grey[50], boxShadow: 1 }}
      >
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          テキスト置換設定
        </Typography>
        <Button variant="outlined" size="small">
          追加
        </Button>
      </Toolbar>
    </Drawer>
  )
}
