import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import ThemeColorShuffle from "../ThemeColorShuffle/ThemeColorShuffle";
import logo from "../../assets/ramirezStefanoLogo.svg";
import "../../App.css";
import { calculateHueRotate } from "../../utils/strings/strings";

const pages = ["Education", "Experience", "Skills", "Portfolio"];

const Header: FC = () => {
  const navigate = useNavigate();
  const style = useTheme();
  const isMobile = useMediaQuery(style.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Toolbar disableGutters sx={{ px: 1, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            className="animateRotation"
            aria-label="logo"
            src={logo}
            style={{
              display: "block",
              margin: 10,
              width: isMobile ? "40px" : "60px",
              filter: `invert(1) sepia(1) saturate(5) hue-rotate(${calculateHueRotate(style.palette.primary.main)}deg)`,
            }}
          />
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <Link style={{ color: style.palette.text.primary }} to="/">
              RAMIREZ STEFANO
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavClick(`/${page.toLowerCase()}/`)}
                sx={{ my: 2, mx: 1 }}
                variant="contained"
              >
                {page}
              </Button>
            ))}
          </Box>

          <Paper sx={{ display: "flex" }}>
            <DarkModeSwitch />
            <ThemeColorShuffle />
          </Paper>

          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 220 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick("/")}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {pages.map((page) => (
            <ListItem key={page} disablePadding>
              <ListItemButton onClick={() => handleNavClick(`/${page.toLowerCase()}/`)}>
                <ListItemText primary={page} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};
export { Header };
