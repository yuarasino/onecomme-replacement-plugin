import grey from "@mui/material/colors/grey"

import { useReplacementContext } from "../hooks/useReplacementContext"

import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import ReplacementList from "../components/ReplacementList"

export default function Sidebar() {
  const { addReplacement } = useReplacementContext()

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
      <Toolbar variant="dense" sx={{ backgroundColor: grey[100] }}>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          テキスト置換設定
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={() => addReplacement()}
        >
          追加
        </Button>
      </Toolbar>
      <Divider />
      <ReplacementList />
    </Drawer>
  )
}
