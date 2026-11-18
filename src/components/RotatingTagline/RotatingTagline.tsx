import { FC, useEffect, useState } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

interface RotatingTaglineProps {
  phrases: string[];
  intervalMs?: number;
}

const RotatingTagline: FC<RotatingTaglineProps> = ({ phrases, intervalMs = 3200 }) => {
  const theme = useTheme();
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    const fadeOut = setTimeout(() => setVisible(false), intervalMs - 300);
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % phrases.length);
      setVisible(true);
    }, intervalMs);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index, intervalMs, paused, phrases.length, prefersReducedMotion]);

  return (
    <Typography
      className="animate delay-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      sx={{
        color: theme.palette.primary.main,
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "2px",
        mb: 1,
        minHeight: "1.5em",
        opacity: prefersReducedMotion || visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {phrases[index]}
    </Typography>
  );
};

export default RotatingTagline;
