import { FC } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "../../../App.css";
interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ gridAutoFlow: "row", padding: 2, minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={8} sx={{ paddingTop: 15 }}>
          <Paper
            className={"animate delay-1"}
            sx={{ padding: 2, marginBottom: 4 }}
          >
            <Typography className={"animate delay-2"} variant="h4" gutterBottom>
              Skills
            </Typography>
            <Box className="parallax-skills" />
            <Typography className={"animate delay-3"} variant="body1" paragraph>
              Languages: JavaScript (Node.js), TypeScript, Python, Java, Ruby on
              Rails, C
            </Typography>
            <Typography className={"animate delay-4"} variant="body1" paragraph>
              Frameworks & Libraries: React, Victory, Redux, Formik, Material UI
            </Typography>
            <Typography className={"animate delay-5"} variant="body1" paragraph>
              Tools & Technologies: Git, Firebase, Google Cloud Platform, Vite,
              Mapbox, GPT-3.5 API
            </Typography>
            <Typography className={"animate delay-6"} variant="body1" paragraph>
              Other: CLI Unix Commands, Assembly Language (LC3), Markdown, .env
              Configuration,
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
