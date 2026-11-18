import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MyThemeProvider from "./theme/MyThemeProvider.tsx";
import { routeElements } from "./routes.tsx";

const router = createBrowserRouter(createRoutesFromElements(routeElements), {});

const app = (
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MyThemeProvider>
        <RouterProvider router={router} />
      </MyThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
