import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import { Outlet, useLocation } from "react-router-dom";
import About from "./components/routes/About/About";
import Education from "./components/routes/Education/Education";
import Experience from "./components/routes/Experience/Experience";
import Skills from "./components/routes/Skills/Skills";
import Portfolio from "./components/routes/Portfolio/Portfolio";
import CardMedia from "@mui/material/CardMedia";

function App() {
  return (
    <>
      <Header />
      {/* <LandingPage /> */}
      <Outlet />

      {/* <About />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Footer /> */}
    </>
  );
}

export default App;
