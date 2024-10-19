import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
