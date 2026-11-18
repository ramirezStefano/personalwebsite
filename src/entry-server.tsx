import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import MyThemeProvider from "./theme/MyThemeProvider";
import { routeElements } from "./routes";
import { getRouteMeta } from "./routesMeta";

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <StyledEngineProvider injectFirst>
        <MyThemeProvider>
          <Routes>{routeElements}</Routes>
        </MyThemeProvider>
      </StyledEngineProvider>
    </StaticRouter>,
  );

  return { html, meta: getRouteMeta(url) };
}
