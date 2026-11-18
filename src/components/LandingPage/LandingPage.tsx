import { FC, useEffect } from "react";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import logoImg from "../../assets/ramirezStefanoLogo.svg";
import portrait from "../../assets/picture.jpeg";
import "../../App.css";
import { calculateHueRotate } from "../../utils/strings/strings";
import { glassCard } from "../../utils/styles/glassCard";
import RotatingTagline from "../RotatingTagline/RotatingTagline";

const TAGLINES = [
  "Software Engineer",
  "AI & Agentic Systems Builder",
  "Full-Stack Problem Solver",
  "Shipping Production Software, End to End",
];

const LandingPage: FC = () => {
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const logo = document.getElementById("rotating-logo");
      if (logo) logo.style.transform = `rotate(${scrollTop / 2}deg)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid container justifyContent="center" sx={{ minHeight: "100vh", pt: 12, pb: 15, px: 2 }}>
      <Grid item xs={12} sm={10} md={8}>

        {/* Hero */}
        <Box
          className="animate delay-1"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 3, md: 5 },
            mb: 6,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              width: { xs: 160, md: 220 },
              height: { xs: 160, md: 220 },
              flexShrink: 0,
              borderRadius: "50%",
              overflow: "hidden",
              border: `4px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 36px ${theme.palette.primary.main}55`,
            }}
          >
            <img
              src={portrait}
              alt="Stefano Ramirez"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </Box>

          <Box>
            <Typography variant="h4" component="h1" className="animate delay-1" gutterBottom>
              Stefano Ramirez
            </Typography>
            <RotatingTagline phrases={TAGLINES} />
            <Typography
              className="animate delay-3"
              variant="body2"
              sx={{ color: "text.secondary", mb: 2.5 }}
            >
              San José, Costa Rica · React · TypeScript · Material UI
            </Typography>
            <img
              id="rotating-logo"
              className="scroll-rotate"
              src={logoImg}
              alt=""
              style={{
                width: 48,
                height: 48,
                filter: `invert(1) sepia(1) saturate(5) hue-rotate(${calculateHueRotate(theme.palette.primary.main)}deg)`,
              }}
            />
          </Box>
        </Box>

        {/* Bio */}
        <Paper
          className="animate delay-2"
          elevation={0}
          sx={{ p: { xs: 3, md: 5 }, textAlign: "left", ...glassCard(theme) }}
        >
          <Typography variant="body1" paragraph>
            I work across the full software development lifecycle — architecture, implementation, deployment,
            and the less glamorous parts like incident response and production migrations — rather than just
            writing code and handing it off. My current focus is building AI-powered products with agentic
            systems, integrating large language models like Claude, GPT, and Gemini into real production
            workflows.
          </Typography>
          <Typography variant="body1" paragraph>
            Passionate engineer from the beautiful land of Costa Rica. My journey into programming started at
            the British School of Costa Rica — studying Computer Science alongside English and Physics — where
            I fell in love with the art of coding. I wrote my first lines of Java at 11 years old.
          </Typography>
          <Typography variant="body1" paragraph>
            My professional path began with internships that broadened my perspective. At KPMG Costa Rica,
            under the mentorship of Luis Rivera (IT Governance Director), I built VBA macros that automated
            internal processes and sparked a lasting interest in discrete mathematics.
          </Typography>
          <Typography variant="body1" paragraph>
            I then pursued a B.S. in Computer Science at UC Santa Cruz, expanding my toolkit to include
            Python, C, assembly language, CLI Unix workflows, and the full breadth of software engineering
            fundamentals.
          </Typography>
          <Typography variant="body1" paragraph>
            At HoneyGrid I joined a talented team led by a senior engineer from Adobe, building cutting-edge
            web applications with React, TypeScript, and Material UI — from complex component engineering to
            GPT-3.5 API integrations. That work carried into my current roles at babapp.io and a financial
            advisory platform, where agentic AI is now central to the product.
          </Typography>
          <Typography variant="body1">
            Feel free to reach out if you'd like to discuss a potential collaboration.
          </Typography>
        </Paper>

      </Grid>
    </Grid>
  );
};

export default LandingPage;
