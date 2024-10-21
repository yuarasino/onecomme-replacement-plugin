import { createRoot } from "react-dom/client"

import theme from "./theme"

import CssBaseline from "@mui/material/CssBaseline"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import { StrictMode } from "react"
import { RecoilRoot } from "recoil"

import App from "./App"

const elem = document.getElementById("root")
if (!elem) throw Error()
const root = createRoot(elem)
root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>,
)
