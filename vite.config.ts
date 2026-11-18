import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // MUI/Emotion's deep subpath CJS imports break Node's ESM resolver if left
    // external, so bundle just those — keep react/react-dom/router external.
    noExternal: [/^@mui\//, /^@emotion\//],
  },
});
