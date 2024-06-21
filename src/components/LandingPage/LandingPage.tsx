import { FC } from "react";
import { Button, Typography, Grid, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ParticlesBg from "particles-bg";
import "../../App.css";
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const style = useTheme();

  return (
    <>
      <Grid
        display={"grid"}
        container
        sx={{
          marginTop: 12,
          marginBottom: 8,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid item sx={{ alignSelf: "center", justifySelf: "center" }}>
          <Typography className="animate delay-1" variant="h1" gutterBottom>
            Welcome to my Website!
          </Typography>

          <Typography className="animate delay-2" variant={"h6"}>
            I specialize in web development, utilizing cutting-edge technologies
            like React, Vite, and Material UI to create exceptional digital
            solutions. With meticulous attention to detail, I craft sleek and
            intuitive interfaces that prioritize user experience. By staying
            updated with the latest industry trends, I ensure your website meets
            the highest standards of performance and aesthetics. Let's
            collaborate to elevate your online presence and achieve your digital
            goals!
          </Typography>

          <Grid
            display={"grid"}
            gridTemplateColumns={"1fr ,1fr"}
            gridAutoFlow={"column"}
            marginTop={"75px"}
            marginBottom={{ xs: "150px" }}
            justifyContent={"center"}
          >
            <Button
              className="animate delay-3"
              variant="contained"
              color="primary"
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/stefano-ramirez-novello/";
              }}
              sx={{
                margin: 2,
                minWidth: 150,
                maxWidth: 250,
              }}
            >
              <LinkedInIcon sx={{ marginRight: 1 }} />
              Contact me!
            </Button>
            <Button
              className="animate delay-3"
              variant="contained"
              color="primary"
              sx={{ margin: 2, minWidth: 150, maxWidth: 250 }}
              onClick={() => {
                window.location.href = "https://github.com/ramirezStefano/";
              }}
            >
              <GitHubIcon sx={{ marginRight: 1 }} />
              Follow Me!
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ParticlesBg
        color={style.palette.primary.main}
        num={30}
        type="cobweb"
        bg={true}
      />
    </>
  );
};
export default LandingPage;
