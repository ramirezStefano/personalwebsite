import { FC } from "react";
import { Typography, Grid, useTheme } from "@mui/material";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const theme = useTheme();

  return (
    <Grid
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100vw",
        paddingTop: 1,
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Typography variant="body1" color={theme.palette.text.secondary}>
        © [2024] ramirezstefano.com All rights reserved.
      </Typography>

      <Typography
        variant="body1"
        color={theme.palette.text.secondary}
        paragraph
      >
        6-26 Campo Real, San Rafael Alajuela, San Jose, Costa Rica
      </Typography>
    </Grid>
  );
};

export default Footer;
