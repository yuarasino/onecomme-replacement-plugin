import orange from "@mui/material/colors/orange"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: orange[800],
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {consts.PLUGIN_NAME}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {`v${consts.PLUGIN_VERSION}`}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
