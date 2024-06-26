import { FC, useEffect } from "react";
import { Typography, Grid, useTheme, Paper } from "@mui/material";
import ParticlesBg from "particles-bg";
import codeImage from "../../assets/codeImage.jpg";
import logoImg from "../../assets/ramirezStefanoLogo.svg";
import "../../App.css";
import { calculateHueRotate } from "../../utils/strings/strings";
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const style = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const rotation = scrollTop / 5; // Adjust the divisor to control the speed of rotation
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
          marginTop: 12,
          marginBottom: 8,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid
          item
          sx={{
            alignSelf: "center",
            justifySelf: "center",
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
            <Typography className="animate delay-1" variant="h2" gutterBottom>
              Welcome to my Website!
            </Typography>
            <img
              style={{ maxWidth: "80vw", borderRadius: 16 }}
              className="animate delay-2"
              src={codeImage}
              alt="logo picture"
            />
            <Typography
              className="animate delay-2"
              variant={"h6"}
              // gutterBottom
              sx={{ marginTop: 4, marginBottom: 0 }}
            >
              I specialize in web development, utilizing cutting-edge
              technologies like React, Vite, and Material UI to create
              exceptional digital solutions. With meticulous attention to
              detail, I craft sleek and intuitive interfaces that prioritize
              user experience. By staying updated with the latest industry
              trends, I ensure your website meets the highest standards of
              performance and aesthetics. Let's collaborate to elevate your
              online presence and achieve your digital goals!
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
          </Paper>
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
