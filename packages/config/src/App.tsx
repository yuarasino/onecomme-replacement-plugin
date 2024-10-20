import Box from "@mui/material/Box"

import Header from "./sections/Header"
import Main from "./sections/Main"
import Sidebar from "./sections/Sidebar"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <title>{consts.PLUGIN_NAME}</title>
      <Header />
      <Sidebar />
      <Main />
    </Box>
  )
}
