import React, { FC } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
interface EducationProps {}

const Education: FC<EducationProps> = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ padding: 2, marginTop: 4 }}>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 2, marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            <Typography variant="body1" paragraph>
              British School of Costa Rica International Baccalaureate Diploma
              with Higher Levels in Computer Science, English, and Physics
              University of California, Santa Cruz (UCSC) Pursued a degree in
              Computer Science
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Education;
