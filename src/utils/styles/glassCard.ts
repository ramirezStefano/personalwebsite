import { Theme } from "@mui/material/styles";

export const glassCard = (theme: Theme) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
  }`,
});
