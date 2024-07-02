import { Grid, useTheme } from "@mui/material";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const style = useTheme();
  return (
    <>
      <Grid
        sx={{
          background: `linear-gradient(to bottom, ${style.palette.primary.main}, ${style.palette.secondary.light})`,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </Grid>
    </>
  );
}

export default App;
