import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./components/Theme/Theme.tsx";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/routes/About/About.tsx";
import Education from "./components/routes/Education/Education.tsx";
import Experience from "./components/routes/Experience/Experience.tsx";
import Skills from "./components/routes/Skills/Skills.tsx";
import Portfolio from "./components/routes/Portfolio/Portfolio.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="education" element={<Education />} />
      <Route path="experience" element={<Experience />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="skills" element={<Skills />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Route>,
  ),
  {},
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
