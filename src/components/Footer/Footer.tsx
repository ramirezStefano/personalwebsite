import { FC } from "react";
import { Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ComputerIcon from "@mui/icons-material/Computer";
import MovingIcon from "@mui/icons-material/Moving";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const style = useTheme();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/about/");
        break;
      case 1:
        navigate("/education");
        break;
      case 2:
        navigate("/experience/");
        break;
      case 3:
        navigate("/portfolio/");
        break;
      case 4:
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
          gridAutoFlow: "row",
          bottom: 0,
          width: "100vw",
          backgroundColor: style.palette.primary.dark,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          padding: 2,
          position: "fixed",
        }}
      >
        <Typography
          sx={{
            color: style.palette.getContrastText(style.palette.primary.dark),
          }}
        >
          © [2024] ramirezstefano.com All rights reserved.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            marginBottom: 5,
            color: style.palette.getContrastText(style.palette.primary.dark),
          }}
        >
          6-26 Campo Real, San Rafael Alajuela, San Jose, Costa Rica
        </Typography>
      </Grid>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: -5,
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
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
          <BottomNavigationAction label="Education" icon={<SchoolIcon />} />
          <BottomNavigationAction label="Experience" icon={<MovingIcon />} />
          <BottomNavigationAction
            label="Portfolio"
            icon={<AccountTreeIcon />}
          />
          <BottomNavigationAction label="Skills" icon={<ComputerIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
};

export { Footer };
