import { FC } from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import "../../../App.css";
interface EducationProps {}

const Education: FC<EducationProps> = () => {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", padding: 2, marginTop: 12 }}
    >
      <Grid item xs={12} sm={8}>
        <Paper
          className={"animate delay-1"}
          sx={{ padding: 2, marginBottom: 4 }}
        >
          <Typography className={"animate delay-2"} variant="h4" gutterBottom>
            Education
          </Typography>
          <Typography className={"animate delay-3"} variant="body1" paragraph>
            British School of Costa Rica International Baccalaureate Diploma
            with Higher Levels in Computer Science, English, and Physics.
          </Typography>
          <Divider className={"animate delay-4"} />
          <Typography className={"animate delay-5"} paragraph marginTop={2}>
            Higher education at University of California, Santa Cruz (UCSC)
            Pursued a degree in Computer Science.
          </Typography>
          <Divider className={"animate delay-4"} />

          <Typography className={"animate delay-6"} paragraph marginTop={2}>
            Github Workshops at (UCSC). LinkedIn Certified in Career Skills in
            Software Development.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Education;
