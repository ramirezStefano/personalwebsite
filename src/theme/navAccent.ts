// The Header/Footer render as a permanently dark glass pill regardless of
// the site's light/dark mode. theme.palette.primary.main switches between a
// value tuned for white backgrounds (light mode) and one tuned for near-black
// backgrounds (dark mode) — using it here would make active/hover nav text
// fail WCAG AA contrast against the always-dark pill whenever the site is in
// light mode. This fixed accent (the dark-mode primary) stays legible against
// that pill in both modes.
export const NAV_ACCENT = "#5B8DEF";
