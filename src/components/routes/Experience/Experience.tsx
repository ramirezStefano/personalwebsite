import { FC } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "../../../App.css";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{
          gridAutoFlow: "row",
          padding: 2,
          paddingBottom: 10,
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12} sm={8} sx={{ paddingY: 15 }}>
          <Paper className={"animate delay-1"} sx={{ padding: 2 }}>
            <Typography className={"animate delay-2"} variant="h4" gutterBottom>
              Experience
            </Typography>
            <Box className="parallax-experience" />

            <Typography className={"animate delay-3"} variant="body1" paragraph>
              KPMG Costa Rica IT Governance Intern Delved into Visual Basic for
              Applications, IT governance practices, and discrete mathematics
              under the guidance of industry experts.
            </Typography>
            <Typography className={"animate delay-4"} variant="body1" paragraph>
              ProIntel Intern, developed bespoke java software tailored to the
              requirement and specifications of a task handling system to
              centralize ongoing processes and new tickets .
            </Typography>
            <Typography className={"animate delay-5"} variant="body1" paragraph>
              Cervecera del Centro Intern, developed a self assisting ruby on
              rails program to keep track of brew batches and processes, with
              timers and input forms to ask for the beer recipes sequential
              steps I was able to lower human error and produce high quality
              beer under the brewmaster supervision.
            </Typography>
            <Typography className={"animate delay-6"} variant="body1" paragraph>
              HoneyGrid Web Development Engineer Collaborated with a talented
              team to develop cutting-edge web applications using React,
              Material UI, TypeScript, and other modern technologies. Led
              projects in frontend development, backend integrations, and API
              integrations.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Experience;
