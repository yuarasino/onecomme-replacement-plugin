import * as consts from "@onecomme-replacement-plugin/common/src/consts"

import { AppBar, Toolbar, Typography } from "@mui/material"

export default function Header() {
  return (
    <AppBar
      color="secondary"
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
