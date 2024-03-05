import { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ padding: 2, marginTop: 4 }}>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 2, marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <Typography variant="body1" paragraph>
              Languages: JavaScript (Node.js), TypeScript, Python, Java, Ruby on
              Rails, C
            </Typography>
            <Typography variant="body1" paragraph>
              Frameworks & Libraries: React, Victory, Redux, Formik, Material UI
            </Typography>
            <Typography variant="body1" paragraph>
              Tools & Technologies: Git, Firebase, Google Cloud Platform, Vite,
              Mapbox, GPT-3.5 API
            </Typography>
            <Typography variant="body1" paragraph>
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
