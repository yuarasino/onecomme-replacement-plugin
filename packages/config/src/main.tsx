import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

const elem = document.getElementById("root")
if (!elem) throw Error()
const root = createRoot(elem)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
