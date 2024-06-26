// src/theme/presets/blue.ts

import { createTheme } from "@mui/material/styles";
import { AppTheme } from "..";

const { palette } = createTheme();
export const theme: AppTheme = {
  dark: {
    palette: {
      mode: "dark",
      primary: palette.augmentColor({
        color: {
          // pick the primary color OF DARK and paste it here
          main: "#cdbeff",
          // pick the onPrimary color OF DARK and paste it here
          contrastText: "#32009a",
        },
      }),
      secondary: palette.augmentColor({
        color: {
          // pick the secondary color OF DARK and paste it here
          main: "#cac3dc",
          // pick the onSecondary color OF DARK and paste it here
          contrastText: "#322e41",
        },
      }),
      text: {
        // pick the onBackground color OF DARK and paste it here
        primary: "#e6e1e6",
        // pick the onSurface color OF DARK and paste it here
        secondary: "#e6e1e6",
      },
      background: {
        // pick the background color OF DARK and paste it here
        default: "#1c1b1e",
        // pick the surface color and OF DARK paste it here
        paper: "#1c1b1e",
      },
      error: palette.augmentColor({
        color: {
          // pick the error color OF DARK and paste it here
          main: "#ffb4a9",
          // pick the onError color OF DARK and paste it here
          contrastText: "#680003",
        },
      }),
      success: palette.augmentColor({
        color: {
          // where did this come from? there is no succeess color mentioned in thatpalette generator, but you can go ahead
          // and add custom colors (on bottom left side of the material-theme-builder page and it'll generate palette
          // for success for you on the right side. from there just pick success OF DARK and onSuccess OF DARK and paste here
          main: "#79dd72",
          contrastText: "#003a03",
        },
      }),
      info: palette.augmentColor({
        color: {
          // same as above
          main: "#99cbff",
          contrastText: "#003257",
        },
      }),
      warning: palette.augmentColor({
        color: {
          // same as above
          main: "#cace09",
          contrastText: "#313300",
        },
      }),
      // I put the outline color here
      divider: "#938f99",
      // important: these are custom variables
      // suppose instead of doing <Button color={'primary'} /> you want to do something like <Button color={'upvote'} />
      // for an upvote button? here I am creating custom variabels and supplying colors that I want based on my product design
      upvote: palette.augmentColor({
        color: {
          main: "#cdbeff",
          contrastText: "#32009a",
        },
      }),
      // same as above
      downvote: palette.augmentColor({
        color: {
          main: "#ffb4a9",
          contrastText: "#680003",
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          // pick the primary Container color OF DARK and paste it here
          main: "#4b24ba",
          // pick the On primary Container color OF DARK and paste it here
          contrastText: "#e8deff",
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          // pick the secondary Container color OF DARK and paste it here
          main: "#494458",
          // pick the On secondary Container color OF DARK and paste it here
          contrastText: "#e7dff8",
        },
      }),
    },
  },
  // REPEAT FOR LIGHT. instead of picking colors from dark palette, pick colors from the light one and repeat as above
  light: {
    palette: {
      mode: "light",
      primary: palette.augmentColor({
        color: {
          main: "#6342d2",
          contrastText: "#ffffff",
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: "#605b71",
          contrastText: "#ffffff",
        },
      }),
      text: {
        primary: "#1c1b1e",
        secondary: "#1c1b1e",
      },
      background: {
        default: "#dddcffff",
        paper: "#ececffff",
      },
      error: palette.augmentColor({
        color: {
          main: "#ba1b1b",
          contrastText: "#ffffff",
        },
      }),
      success: palette.augmentColor({
        color: {
          main: "#006e10",
          contrastText: "#ffffff",
        },
      }),
      info: palette.augmentColor({
        color: {
          main: "#0062a2",
          contrastText: "#ffffff",
        },
      }),
      warning: palette.augmentColor({
        color: {
          main: "#606200",
          contrastText: "#313300",
        },
      }),
      divider: "#79757f",
      upvote: palette.augmentColor({
        color: {
          main: "#6342d2",
          contrastText: "#ffffff",
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: "#ba1b1b",
          contrastText: "#ffffff",
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: "#e8deff",
          contrastText: "#1c0062",
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: "#e7dff8",
          contrastText: "#1d192b",
        },
      }),
    },
  },
};
