import { createRoot } from "react-dom/client"

import theme from "./theme"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { StrictMode } from "react"

import App from "./App"

const elem = document.getElementById("root")
if (!elem) throw new Error()
const root = createRoot(elem)
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
