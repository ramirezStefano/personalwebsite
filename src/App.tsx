import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
