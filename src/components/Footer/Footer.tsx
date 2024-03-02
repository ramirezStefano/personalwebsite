import { FC } from "react";
import { Typography, Grid, useTheme } from "@mui/material";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const theme = useTheme();

  return (
    <Grid sx={{ backgroundColor: theme.palette.secondary.dark }}>
      <Typography variant="body1" gutterBottom>
        © [2024] ramirezstefano.com All rights reserved.
      </Typography>

      <Typography variant="body1" paragraph>
        6-26 Campo Real, San Rafael Alajuela, San Jose, Costa Rica
      </Typography>
    </Grid>
  );
};

export default Footer;
