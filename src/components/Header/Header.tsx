import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Grid, Paper, useTheme } from "@mui/material";
import React from "react";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import ThemeColorShuffle from "../ThemeColorShuffle/ThemeColorShuffle";

const pages = ["About", "Education", "Experience", "Skills", "Portfolio"];

const Header: FC = () => {
  const navigate = useNavigate();
  const style = useTheme();

  const handleTopNavButtons = (event: React.MouseEvent<HTMLElement>) => {
    const buttonText: string = event.currentTarget.innerText.toLowerCase();
    switch (buttonText) {
      case "about":
        navigate("/about/");
        break;
      case "education":
        navigate("/education/");
        break;
      case "experience":
        navigate("/experience/");
        break;
      case "skills":
        navigate("/skills/");
        break;
      case "portfolio":
        navigate("/portfolio/");
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="fixed">
      <Grid
        display="grid"
        gridAutoColumns={"column"}
        gridTemplateColumns={"1fr, 1fr, 1fr"}
        justifyContent={"space-evenly"}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="a"
            sx={{
              mr: 2,
              display: "grid",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                color: style.palette.text.primary,
              }}
              to={`/`}
            >
              RAMIREZ STEFANO
            </Link>
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "grid" }, gridAutoFlow: "column" }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleTopNavButtons}
                onMouseDown={handleTopNavButtons}
                sx={{ my: 2, display: "block", marginX: 1 }}
                variant="contained"
              >
                {page}
              </Button>
            ))}
          </Box>
          <Paper sx={{ display: "grid", gridAutoFlow: "column", marginX: 2 }}>
            <DarkModeSwitch />
            <ThemeColorShuffle />
          </Paper>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};
export { Header };
