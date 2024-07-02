import { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import "../../../App.css";
interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{
          gridAutoFlow: "row",
          paddingBottom: 10,
          "@media (min-width: 1024px)": {
            paddingBottom: 20,
          },
          "@media (min-width: 1440px)": {
            paddingBottom: 35,
          },
          // paddingTop: 12,
        }}
      >
        <Grid item xs={12} sm={8} sx={{ paddingTop: 15 }}>
          <Paper className={"animate"} sx={{ padding: 2, margin: 2 }}>
            <Typography className={"animate delay-1"} variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography className={"animate delay-2"} variant="body1" paragraph>
              Hey there! I'm a passionate web development engineer hailing from
              the beautiful land of Costa Rica. My journey into the world of
              programming started at the British School of Costa Rica, where I
              delved into the complexities of computer science alongside
              subjects like English and physics. It was during this time that I
              fell in love with the art of coding, crafting my first lines of
              Java at the tender age of 11.
            </Typography>
            <Typography className={"animate delay-3"} variant="body1" paragraph>
              Fast forward through internships and educational pursuits, and I
              found myself at KPMG Costa Rica, where I immersed myself in the
              realm of IT governance. Under the mentorship of luminaries like
              Luis Rivera, I delved into the world of Visual Basic for
              Applications, creating super macros that streamlined processes and
              sparked my interest in discrete mathematics.
            </Typography>
            <Typography className={"animate delay-4"} variant="body1" paragraph>
              My thirst for knowledge led me to UCSC for a computer science
              undergrad, where I expanded my repertoire to include a myriad of
              languages and tools, from C and Java to Python and Ruby on Rails.
              Alongside CLI Unix commands and Git, I dabbled in assembly
              language and advanced Java, enriching my understanding of software
              development.
            </Typography>
            <Typography className={"animate delay-5"} variant="body1" paragraph>
              My professional journey continued at HoneyGrid, where I had the
              privilege of working alongside a talented team led by James
              Delorey, a seasoned software engineer from Adobe. Here, I immersed
              myself in the latest frontend technologies, crafting dynamic
              applications with React, Material UI, and TypeScript. From complex
              component engineering to GPT-3.5 API integration, I honed my
              skills in creating user-friendly experiences that push the
              boundaries of possibility.
            </Typography>
            <Typography className={"animate delay-6"} variant="body1">
              Feel free to reach out to me if you have any questions or would
              like to discuss a potential collaboration.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
