import { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ padding: 2, marginTop: 4 }}>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 2, marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom>
              Experience
            </Typography>
            <Typography variant="body1" paragraph>
              KPMG Costa Rica IT Governance Intern Delved into Visual Basic for
              Applications, IT governance practices, and discrete mathematics
              under the guidance of industry experts.
            </Typography>
            <Typography variant="body1" paragraph>
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
