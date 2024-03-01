import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./components/Theme/Theme.tsx";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import ErrorPage from "./components/routes/ErrorPage/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/routes/About/About.tsx";
import Education from "./components/routes/Education/Education.tsx";
import Experience from "./components/routes/Experience/Experience.tsx";
import Skills from "./components/routes/Skills/Skills.tsx";
import Portfolio from "./components/routes/Portfolio/Portfolio.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "landingpage/:landingPageId",
        element: <LandingPage />,
      },
      {
        path: "about/:aboutId",
        element: <About />,
      },
      {
        path: "education/:educationId",
        element: <Education />,
      },
      {
        path: "experience/:experienceId",
        element: <Experience />,
      },
      {
        path: "skills/:skillsId",
        element: <Skills />,
      },
      {
        path: "portfolio/:portfolioId",
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
