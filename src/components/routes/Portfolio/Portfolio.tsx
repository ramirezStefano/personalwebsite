import { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ padding: 2, marginTop: 4 }}>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 2, marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom>
              Portfolio
            </Typography>
            <Typography variant="body1" paragraph>
              Description: Software engineer at HoneyGrid.
            </Typography>
            <Typography variant="body1" paragraph>
              Technologies Used: List of technologies used in the project. Link:
            </Typography>
            <Typography variant="body1" paragraph>
              Link to the project or its repository.
            </Typography>
            <Typography variant="body1" paragraph>
              Other: CLI Unix Commands, Assembly Language (LC3), Markdown, .env
              Configuration
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
