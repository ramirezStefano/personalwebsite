import { theme as green } from "./presets/green";
import { theme as blue } from "./presets/blue";
import { theme as _default } from "./presets/default";
import { theme as red } from "./presets/red";
import { Palette, PaletteColor } from "@mui/material/styles";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
declare module "@mui/material/styles" {

  interface Palette {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }

  interface PaletteOptions {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}
// this will be our Theme Type. remember how we created themes earlier? those objects
// are of type AppTheme, we will add this type to those files
export interface AppTheme {
  dark: {
    palette: DeepPartial<Palette>;
  };
  light: {
    palette: DeepPartial<Palette>;
  };
}
// finally we export a final object that contains all our themes which we can
// use to pick our desired palette.
export const color = {
  0: _default,
  1: green,
  2: blue,
  3: red,
};
