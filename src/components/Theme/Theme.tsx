import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#34495e",
    },
    secondary: {
      main: "#ecf0f1",
    },
    success: {
      main: "#2ecc71",
    },
    warning: {
      main: "#e67e22",
    },
    error: {
      main: "#da2424",
    },
    info: {
      main: "#0d99ff",
    },
  },
});

export default theme;
