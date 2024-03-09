import { FC } from "react";
import { Typography, Grid } from "@mui/material";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Grid sx={{ position: "fixed", bottom: 0, width: "100vw" }}>
      <Typography variant="body1">
        © [2024] ramirezstefano.com All rights reserved.
      </Typography>

      <Typography variant="body1" paragraph>
        6-26 Campo Real, San Rafael Alajuela, San Jose, Costa Rica
      </Typography>
    </Grid>
  );
};

export default Footer;
