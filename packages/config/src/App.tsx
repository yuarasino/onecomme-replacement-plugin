import { CssBaseline, ThemeProvider } from "@mui/material"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"
import Layout from "./components/Layout"
import theme from "./styles/theme"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <title>{consts.PLUGIN_NAME}</title>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )
}
