import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Divider,
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
  const location = useLocation();
  const style = useTheme();
  const isMobile = useMediaQuery(style.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const isActive = (page: string) =>
    location.pathname.toLowerCase().includes(page.toLowerCase());

  const logoFilter = `invert(1) sepia(1) saturate(5) hue-rotate(${calculateHueRotate(style.palette.primary.main)}deg)`;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: "12px",
        left: "12px",
        right: "12px",
        width: "auto",
        borderRadius: "50px",
        background: "rgba(10, 10, 10, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{ px: 2, justifyContent: "space-between", minHeight: "56px !important" }}
      >
        {/* Logo + wordmark */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <img
            className="animateRotation"
            aria-label="logo"
            src={logo}
            style={{
              display: "block",
              width: isMobile ? "32px" : "42px",
              filter: logoFilter,
            }}
          />
          <Typography
            component="span"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: isMobile ? "0.85rem" : "1rem",
              letterSpacing: ".25rem",
              color: "white",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              lineHeight: 1,
              mb: 0,
            }}
          >
            <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
              RAMIREZ STEFANO
            </Link>
          </Typography>
        </Box>

        {/* Right side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavClick(`/${page.toLowerCase()}/`)}
                sx={{
                  px: 2,
                  py: 0.75,
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: isActive(page) ? 700 : 400,
                  color: isActive(page) ? style.palette.primary.main : "rgba(255,255,255,0.8)",
                  backgroundColor: isActive(page)
                    ? `${style.palette.primary.main}22`
                    : "transparent",
                  border: isActive(page)
                    ? `1px solid ${style.palette.primary.main}66`
                    : "1px solid transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: `${style.palette.primary.main}22`,
                    color: style.palette.primary.main,
                    border: `1px solid ${style.palette.primary.main}66`,
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Theme controls */}
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <DarkModeSwitch />
            <ThemeColorShuffle />
          </Paper>

          {/* Mobile hamburger */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              width: 36,
              height: 36,
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.16)" },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            background: "rgba(12, 12, 12, 0.95)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logo} width={26} style={{ filter: logoFilter }} alt="logo" />
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.2rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              MENU
            </Typography>
          </Box>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="close menu"
            sx={{ color: "rgba(255,255,255,0.6)" }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

        <List sx={{ pt: 1 }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavClick("/")}
              sx={{
                mx: 1,
                borderRadius: "12px",
                "&:hover": { backgroundColor: `${style.palette.primary.main}22` },
              }}
            >
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  sx: { color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" },
                }}
              />
            </ListItemButton>
          </ListItem>

          {pages.map((page) => (
            <ListItem key={page} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(`/${page.toLowerCase()}/`)}
                sx={{
                  mx: 1,
                  borderRadius: "12px",
                  backgroundColor: isActive(page)
                    ? `${style.palette.primary.main}22`
                    : "transparent",
                  "&:hover": { backgroundColor: `${style.palette.primary.main}22` },
                }}
              >
                <ListItemText
                  primary={page}
                  primaryTypographyProps={{
                    sx: {
                      color: isActive(page)
                        ? style.palette.primary.main
                        : "rgba(255,255,255,0.8)",
                      fontWeight: isActive(page) ? 700 : 400,
                      fontSize: "0.95rem",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export { Header };
