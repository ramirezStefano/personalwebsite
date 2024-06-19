import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const pages = ["About", "Education", "Experience", "Skills", "Portfolio"];

const Header: FC = () => {
  const navigate = useNavigate();

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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "grid" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={`/`}>RAMIREZ STEFANO</Link>
          </Typography>
          <Typography
            variant="h5"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "grid", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={`/`}>RAMIREZ STEFANO</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleTopNavButtons}
                onMouseDown={handleTopNavButtons}
                sx={{ my: 2, color: "#0d99ff", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { Header };
