import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { grey } from "@mui/material/colors"

const drawerWidth = 300

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Toolbar variant="dense" sx={{ backgroundColor: grey[100] }}>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          テキスト置換設定
        </Typography>
        <Button variant="outlined" color="info" size="small">
          追加
        </Button>
      </Toolbar>
      <Divider />
      <Box sx={{ overflow: "auto" }} />
    </Drawer>
  )
}
