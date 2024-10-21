import { Box } from "@mui/material"

import Header from "./Header"
import Nav from "./Nav"

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Nav />
    </Box>
  )
}
