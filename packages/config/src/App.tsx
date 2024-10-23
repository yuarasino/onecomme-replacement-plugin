import { CssBaseline, ThemeProvider } from "@mui/material"
import { useEffect } from "react"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"
import Layout from "./components/Layout"
import useConfigStore from "./stores/useConfigStore"
import theme from "./styles/theme"

export default function App() {
  const { loadConfig } = useConfigStore()

  useEffect(() => {
    loadConfig()
  }, [loadConfig])

  return (
    <ThemeProvider theme={theme}>
      <title>{consts.PLUGIN_NAME}</title>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )
}
