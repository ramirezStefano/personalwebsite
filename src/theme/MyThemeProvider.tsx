import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

import { theme as appTheme } from "./index";

export const ThemeContext = React.createContext({
  toggleColorMode: () => {},
});

type MyThemeProviderProps = {
  children?: React.ReactNode;
};

export default function MyThemeProvider(props: MyThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light",
  );

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const _theme = React.useMemo(
    () =>
      createTheme({
        ...(appTheme[mode] as ThemeOptions),
        typography: {
          h3: {
            color: mode === "dark" ? "rgba(255,255,255,0.87)" : "rgba(0,0,0,0.87)",
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          },
          h4: {
            color: mode === "dark" ? "rgba(255,255,255,0.87)" : "rgba(0,0,0,0.87)",
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          },
          h5: {
            color: appTheme[mode].palette.secondary?.main,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          },
          h6: {
            fontSize: "0.8rem",
            fontWeight: "bold",
            letterSpacing: "1px",
          },
          body1: {
            fontSize: "1rem",
            lineHeight: 1.7,
            marginBottom: "1em",
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={_theme}>
        <GlobalStyles styles={{}} />
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
