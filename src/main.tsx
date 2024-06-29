import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/routes/About/About.tsx";
import Education from "./components/routes/Education/Education.tsx";
import Experience from "./components/routes/Experience/Experience.tsx";
import Skills from "./components/routes/Skills/Skills.tsx";
import Portfolio from "./components/routes/Portfolio/Portfolio.tsx";
import MyThemeProvider from "./theme/MyThemeProvider.tsx";
import ErrorPage from "./components/routes/ErrorPage/ErrorPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="education" element={<Education />} />
      <Route path="experience" element={<Experience />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="skills" element={<Skills />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
  {},
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MyThemeProvider>
        <RouterProvider router={router} />
      </MyThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
