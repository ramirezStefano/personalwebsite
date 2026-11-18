import { Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/routes/Education/Education";
import Experience from "./components/routes/Experience/Experience";
import Skills from "./components/routes/Skills/Skills";
import Portfolio from "./components/routes/Portfolio/Portfolio";
import ErrorPage from "./components/routes/ErrorPage/ErrorPage";

export const routeElements = (
  <Route path="/" element={<App />}>
    <Route index element={<LandingPage />} />
    <Route path="education" element={<Education />} />
    <Route path="experience" element={<Experience />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="skills" element={<Skills />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);
