import { Box } from "@mui/material";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useDocumentMeta } from "./utils/seo/useDocumentMeta";

function App() {
  useDocumentMeta();

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", bgcolor: "background.default" }}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: (theme) =>
            `radial-gradient(60% 45% at 50% 0%, ${theme.palette.primary.main}${
              theme.palette.mode === "dark" ? "1f" : "14"
            }, transparent 70%)`,
        }}
      />
      <Header />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
