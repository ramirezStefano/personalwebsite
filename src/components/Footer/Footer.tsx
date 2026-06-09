import { FC } from "react";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ComputerIcon from "@mui/icons-material/Computer";
import MovingIcon from "@mui/icons-material/Moving";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import React from "react";
import { useNavigate } from "react-router-dom";
import resume from "../../assets/pdf/CV STEFANO RAMIREZ.pdf";

const Footer: FC = () => {
  const style = useTheme();
  const [value, setValue] = React.useState<number>();
  const navigate = useNavigate();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0: navigate("/education"); break;
      case 1: navigate("/experience/"); break;
      case 2: navigate("/portfolio/"); break;
      case 3: navigate("/skills/"); break;
    }
  };

  const pillButtonSx = {
    px: 2,
    py: 0.75,
    borderRadius: "20px",
    fontSize: "0.8rem",
    color: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: `${style.palette.primary.main}22`,
      color: style.palette.primary.main,
      border: `1px solid ${style.palette.primary.main}66`,
    },
  };

  const glassIconButtonSx = {
    color: "rgba(255,255,255,0.7)",
    width: 36,
    height: 36,
    border: "1px solid rgba(255,255,255,0.12)",
    backgroundColor: "rgba(255,255,255,0.06)",
    "&:hover": {
      backgroundColor: `${style.palette.primary.main}22`,
      color: style.palette.primary.main,
      border: `1px solid ${style.palette.primary.main}66`,
    },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "12px",
        left: "12px",
        right: "12px",
        zIndex: 1100,
        borderRadius: { xs: "24px", md: "50px" },
        background: "rgba(10, 10, 10, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 -4px 32px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      {/* Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
          py: 1,
          px: 2,
        }}
      >
        <Button
          startIcon={<LinkedInIcon fontSize="small" />}
          sx={pillButtonSx}
          onClick={() => window.open("https://www.linkedin.com/in/stefano-ramirez-novello/", "_blank")}
        >
          LinkedIn
        </Button>
        <Button
          startIcon={<DownloadIcon fontSize="small" />}
          sx={pillButtonSx}
          onClick={() => window.open(resume, "_blank")}
        >
          Resume
        </Button>
        <Button
          startIcon={<GitHubIcon fontSize="small" />}
          sx={pillButtonSx}
          onClick={() => window.open("https://github.com/ramirezStefano/", "_blank")}
        >
          GitHub
        </Button>
      </Box>

      {/* Mobile */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            pt: 1.25,
            pb: 0.5,
          }}
        >
          <IconButton
            aria-label="LinkedIn"
            sx={glassIconButtonSx}
            onClick={() => window.open("https://www.linkedin.com/in/stefano-ramirez-novello/", "_blank")}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="Download resume"
            sx={glassIconButtonSx}
            onClick={() => window.open(resume, "_blank")}
          >
            <PictureAsPdfIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            sx={glassIconButtonSx}
            onClick={() => window.open("https://github.com/ramirezStefano/", "_blank")}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Box>

        <BottomNavigation
          value={value}
          onChange={handleChange}
          sx={{
            background: "transparent",
            borderRadius: "0 0 24px 24px",
            "& .MuiBottomNavigationAction-root": {
              color: "rgba(255,255,255,0.5)",
              minWidth: 0,
            },
            "& .Mui-selected": {
              color: style.palette.primary.main,
            },
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.65rem",
            },
          }}
        >
          <BottomNavigationAction label="Education" icon={<SchoolIcon fontSize="small" />} />
          <BottomNavigationAction label="Experience" icon={<MovingIcon fontSize="small" />} />
          <BottomNavigationAction label="Portfolio" icon={<AccountTreeIcon fontSize="small" />} />
          <BottomNavigationAction label="Skills" icon={<ComputerIcon fontSize="small" />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export { Footer };
