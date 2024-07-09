import { FC } from "react";
import { Grid, Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ComputerIcon from "@mui/icons-material/Computer";
import MovingIcon from "@mui/icons-material/Moving";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import resume from "../../assets/pdf/CV STEFANO RAMIREZ.pdf";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const style = useTheme();
  const [value, setValue] = React.useState<number>();
  const navigate = useNavigate();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/education");
        break;
      case 1:
        navigate("/experience/");
        break;
      case 2:
        navigate("/portfolio/");
        break;
      case 3:
        navigate("/skills/");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Grid
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: "1fr, 1fr",
          justifyContent: "space-around",
          bottom: 0,
          width: "100dvw",
          height: "12vh",
          backgroundColor: style.palette.background.paper,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          padding: 0,
          position: "fixed",
          border: `2px solid ${style.palette.primary.main}`,
        }}
      >
        <IconButton
          aria-label="linkedIn Button Mobile"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/stefano-ramirez-novello/";
          }}
          sx={{
            display: {
              xs: "grid",
              sm: "grid",
              md: "none",
              lg: "none",
              xl: "none",
            },
            marginBottom: 50,
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="linkedIn Button Mobile"
          onClick={() => {
            window.open(resume, "_blank");
          }}
          sx={{
            display: {
              xs: "grid",
              sm: "grid",
              md: "none",
              lg: "none",
              xl: "none",
            },
            marginBottom: 50,
          }}
        >
          <PictureAsPdfIcon />
        </IconButton>
        <IconButton
          sx={{
            display: {
              xs: "grid",
              sm: "grid",
              md: "none",
              lg: "none",
              xl: "none",
            },
            marginBottom: 50,
          }}
          onClick={() => {
            window.location.href = "https://github.com/ramirezStefano/";
          }}
        >
          <GitHubIcon sx={{ justifySelf: "center" }} />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/stefano-ramirez-novello/";
          }}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "grid",
              lg: "grid",
              xl: "grid",
            },
            maxHeight: 36,
            minHeight: 10,
            alignSelf: "center",
            gridAutoFlow: "column",
          }}
        >
          <LinkedInIcon />
          Contact me!
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "grid",
              lg: "grid",
              xl: "grid",
            },
            maxHeight: 36,
            minHeight: 10,
            alignSelf: "center",
            gridAutoFlow: "column",
          }}
          onClick={() => {
            window.open(resume, "_blank");
          }}
        >
          <DownloadIcon />
          Download Resume
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "grid",
              lg: "grid",
              xl: "grid",
            },
            maxHeight: 36,
            minHeight: 10,
            alignSelf: "center",
            gridAutoFlow: "column",
          }}
          onClick={() => {
            window.location.href = "https://github.com/ramirezStefano/";
          }}
        >
          <GitHubIcon sx={{ marginRight: 1 }} />
          Follow me!
        </Button>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: {
              xs: "grid",
              sm: "grid",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="Education" icon={<SchoolIcon />} />
            <BottomNavigationAction label="Experience" icon={<MovingIcon />} />
            <BottomNavigationAction
              label="Portfolio"
              icon={<AccountTreeIcon />}
            />
            <BottomNavigationAction label="Skills" icon={<ComputerIcon />} />
          </BottomNavigation>
        </Box>
      </Grid>
    </>
  );
};

export { Footer };
