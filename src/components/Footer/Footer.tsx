import { FC } from "react";
import { Typography, Grid } from "@mui/material";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Grid>
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
