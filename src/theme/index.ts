import { theme as defaultTheme } from "./presets/default";
import { Palette } from "@mui/material/styles";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface AppTheme {
  dark: {
    palette: DeepPartial<Palette>;
  };
  light: {
    palette: DeepPartial<Palette>;
  };
}

export const theme = defaultTheme;
