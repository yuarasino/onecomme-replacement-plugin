import theme from "./theme"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"

import { Box, CssBaseline, ThemeProvider } from "@mui/material"

import Layout from "./components/Layout"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <title>{consts.PLUGIN_NAME}</title>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )
}
