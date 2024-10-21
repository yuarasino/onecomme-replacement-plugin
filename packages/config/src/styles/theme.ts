import { colors, createTheme } from "@mui/material"

export default createTheme({
  cssVariables: true,
  palette: {
    secondary: {
      main: colors.orange[800],
    },
  },
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
  },
})
