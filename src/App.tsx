import { Grid, useTheme } from "@mui/material";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import ParticlesBg from "particles-bg";

function App() {
  const style = useTheme();

  return (
    <>
      <Grid
        sx={{
          position: "relative",
          background: `linear-gradient(to bottom, ${style.palette.primary.main}, ${style.palette.secondary.light})`,
        }}
        zIndex={0}
      >
        <Header />

        <Grid position={"fixed"} width={"100vw"} height={"100vh"} zIndex={-1}>
          <ParticlesBg
            type="cobweb"
            num={50}
            bg={false}
            color={style.palette.secondary.main}
          />
        </Grid>
        <Grid zIndex={2}>
          <Outlet />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
