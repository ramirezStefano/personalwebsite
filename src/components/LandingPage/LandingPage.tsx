import { FC, useEffect } from "react";
import {
  Typography,
  Grid,
  useTheme,
  Paper,
  Box,
  TextField,
  Button,
} from "@mui/material";
import logoImg from "../../assets/ramirezStefanoLogo.svg";
import portrait from "../../assets/picture.jpeg";
import "../../App.css";
import { calculateHueRotate } from "../../utils/strings/strings";
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const style = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const rotation = scrollTop / 2;
      const logo = document.getElementById("rotating-logo");
      if (logo) {
        logo.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Grid
        display={"grid"}
        container
        sx={{
          justifyContent: "center",
          alignContent: "center",
          paddingBottom: 10,
          "@media (min-width: 1024px)": {
            paddingBottom: 20,
          },
          "@media (min-width: 1440px)": {
            paddingBottom: 35,
          },
        }}
      >
        <Grid
          item
          sx={{
            alignSelf: "center",
            justifySelf: "center",
            paddingTop: 10,
          }}
        >
          <Paper
            sx={{
              width: "90vw",
              "@media (max-width: 768px)": {
                padding: 1,
                marginBottom: 15,
                marginTop: 4,
              },
              padding: 1,
              marginBottom: 20,
              marginTop: 4,
            }}
          >
            <Typography
              className="animate delay-1"
              variant="h2"
              gutterBottom
              marginTop={4}
              sx={{
                color: "primary.main",
              }}
            >
              Welcome to my Website!
            </Typography>
            <Box className="parallax" />
            <Typography
              className="animate delay-2"
              variant={"h6"}
              sx={{ marginTop: 4, marginBottom: 0 }}
            >
              Hi there! My name is Stefano Ramirez, I specialize in web
              development, utilizing cutting-edge technologies like React, Vite,
              and Material UI to create exceptional digital solutions. With
              meticulous attention to detail.
            </Typography>
            <img
              style={{
                maxWidth: "80vw",
                maxHeight: "20vh",
                filter: "grayscale(100%)",
                borderRadius: 16,
                margin: 16,
              }}
              className="animate delay-3"
              src={portrait}
              alt="portrait-picture"
            />

            <Typography className={"animate delay-4"} variant="body1" paragraph>
              I'm a passionate web development engineer from the beautiful land
              of Costa Rica. My journey into proper programming started at the
              British School of Costa Rica, where I delved into the complexities
              of computer science alongside subjects like English and Physics.
              It was during this time that I fell in love with the art of
              coding. Before that I started experimenting with my first lines of
              Java at the young age of 11.
            </Typography>
            <Typography className={"animate delay-5"} variant="body1" paragraph>
              Fast forward through internships and educational pursuits, I found
              myself at KPMG Costa Rica, where I immersed myself in the realm of
              IT governance. Under the mentorship of Luis Rivera (IT governance
              director), I delved into the world of Visual Basic for
              Applications, creating super macros that automated internal
              processes and sparked my interest in discrete mathematics.
            </Typography>
            <img
              id="rotating-logo"
              className="scroll-rotate"
              style={{
                maxWidth: "80vw",
                maxHeight: "20vh",
                filter: `invert(1) sepia(1) saturate(5) hue-rotate(${calculateHueRotate(style.palette.primary.main)}deg)`,
              }}
              src={logoImg}
              alt="logo picture"
            />
            <Typography className={"animate delay-6"} variant="body1" paragraph>
              My thirst for knowledge led me to UCSC for a computer science
              undergrad, where I expanded my repertoire to include a myriad of
              languages and tools, from C and Java to Python. Alongside CLI Unix
              commands and Git, I dabbled in assembly language and advanced
              Java, enriching my understanding of software development.
            </Typography>
            <Typography className={"animate delay-7"} variant="body1" paragraph>
              My professional journey continued at HoneyGrid, where I had the
              privilege of working alongside a talented team led by James
              Delorey, a seasoned software engineer from Adobe. Here, I immersed
              myself in the latest frontend technologies, crafting dynamic
              applications.
            </Typography>
            <Typography className={"animate delay-8"} variant="body1">
              Feel free to reach out to me if you have any questions or would
              like to discuss a potential collaboration.
            </Typography>

            <Grid
              item
              display={"grid"}
              maxWidth="50vw"
              margin="0 auto"
              marginY={4}
              gap={2}
            >
              <Typography variant="h4">Let Get in Touch!</Typography>
              <TextField label="Name" disabled></TextField>
              <TextField label="Email" disabled></TextField>
              <TextField label="Message" disabled></TextField>
              <Button disabled>Send!</Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default LandingPage;
