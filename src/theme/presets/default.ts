// src/theme/presets/default.ts

import { AppTheme } from "..";

export const theme: AppTheme = {
  dark: {
    palette: {
      mode: "dark",
      primary: {
        main: "#5B8DEF",
        contrastText: "#06101F",
      },
      secondary: {
        main: "#9BA4B5",
        contrastText: "#06101F",
      },
      background: {
        default: "#0B0D10",
        paper: "#131619",
      },
    },
  },
  light: {
    palette: {
      mode: "light",
      primary: {
        main: "#3657D6",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#5B6472",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#F5F6F8",
        paper: "#FFFFFF",
      },
    },
  },
};
