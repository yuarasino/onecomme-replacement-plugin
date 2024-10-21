import { createRoot } from "react-dom/client"

import { StrictMode } from "react"

import App from "./App"

const elem = document.getElementById("root")
if (!elem) throw new Error()
const root = createRoot(elem)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
