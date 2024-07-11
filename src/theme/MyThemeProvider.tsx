import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

import { color as ThemeColors } from "./index";

export const ThemeContext = React.createContext({
  toggleColorMode: () => {},
  shuffleColorTheme: () => {},
});

type MyThemeProviderProps = {
  children?: React.ReactNode;
};

export default function MyThemeProvider(props: MyThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light",
  );
  const [theme, setTheme] = React.useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      shuffleColorTheme: () => {
        setTheme((prevTheme) => ((prevTheme + 1) % 4) as 0 | 1 | 2 | 3);
      },
    }),
    [],
  );

  const _theme = React.useMemo(
    () =>
      createTheme({
        ...(ThemeColors[theme][mode] as ThemeOptions),
        typography: {
          h3: {
            color: ThemeColors[theme].dark.palette.primary?.main,
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          },
          h4: {
            color: ThemeColors[theme].dark.palette.primary?.main,
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          },
          h5: {
            color: ThemeColors[theme].dark.palette.secondary?.main,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          },
          h6: {
            color: ThemeColors[theme].dark.palette.secondary?.dark,
            fontSize: "0.8rem",
            fontWeight: "bold",
            // textTransform: "uppercase",
            letterSpacing: "1px",
          },
          body1: {
            fontSize: "1rem",
            lineHeight: 2,
            marginBottom: "1em",
            color: ThemeColors[theme].dark.palette.secondary?.dark,
          },
        },
      }),
    [mode, theme],
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
