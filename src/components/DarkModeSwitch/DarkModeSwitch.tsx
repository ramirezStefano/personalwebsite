import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/MyThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";
import React from "react";

const DarkModeSwitch = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);

  return (
    <IconButton
      aria-label="toggle color mode"
      onClick={colorMode.toggleColorMode}
      sx={{
        width: 36,
        height: 36,
        color: "rgba(255,255,255,0.8)",
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
        "&:hover": {
          backgroundColor: `${theme.palette.primary.main}22`,
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}66`,
        },
      }}
    >
      {theme.palette.mode === "dark" ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </IconButton>
  );
};

export default DarkModeSwitch;
