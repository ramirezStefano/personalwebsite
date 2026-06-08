import { FC } from "react";
import { Box, Chip, Grid, Paper, Typography, useTheme } from "@mui/material";
import "../../../App.css";

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Financial Advisors",
    role: "Software Engineer",
    period: "2026 – Present",
    description:
      "Building an AI-powered financial advisory platform driven by agentic systems. The system reasons over client portfolios and market context to surface personalized, explainable recommendations — augmenting the workflow of financial advisors with intelligent automation.",
    tech: ["React", "TypeScript", "Material UI", "Vite", "Axios", "Google Cloud", "Agentic AI"],
  },
  {
    company: "babapp.io",
    role: "Software Engineer",
    period: "2025 – Present",
    description:
      "Developing a full-stack product built around agentic AI workflows. Responsible for architecture decisions, frontend implementation, and integrating AI-driven pipelines that automate core user interactions and deliver an intelligent product experience.",
    tech: ["React", "TypeScript", "Material UI", "Vite", "Firebase", "Axios", "Agentic AI"],
  },
  {
    company: "HoneyGrid",
    role: "Web Development Engineer",
    period: "2022 – Present",
    description:
      "Collaborated with a talented team led by a senior engineer from Adobe to build cutting-edge web applications. Started in React Native with the Paper library, then transitioned to the main React web app. Led projects in complex component engineering, GPT-3.5 API integration, backend integrations, and user-facing feature development.",
    tech: ["React", "React Native", "TypeScript", "Material UI", "Redux", "Firebase", "GPT-3.5 API", "Mapbox"],
  },
  {
    company: "Cervecera del Centro",
    role: "Software Development Intern",
    period: "2021",
    description:
      "Built a self-assisting Ruby on Rails application to track brew batches and processes end-to-end. Implemented timers and sequential recipe input forms to guide the brewing workflow, reducing human error and improving batch quality under brewmaster supervision.",
    tech: ["Ruby on Rails"],
  },
  {
    company: "ProIntel",
    role: "Software Development Intern",
    period: "2020",
    description:
      "Developed bespoke Java software tailored to the requirements of a task handling system, centralizing ongoing processes and new support tickets across the organization.",
    tech: ["Java"],
  },
  {
    company: "KPMG Costa Rica",
    role: "IT Governance Intern",
    period: "2019",
    description:
      "Immersed in IT governance practices under the mentorship of Luis Rivera, IT Governance Director. Built automating macros in Visual Basic for Applications that streamlined internal processes and sparked a lasting interest in discrete mathematics.",
    tech: ["VBA", "Excel", "IT Governance"],
  },
];

const Experience: FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ gridAutoFlow: "row", padding: 2, paddingBottom: 15, minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8} sx={{ paddingY: 15 }}>
        <Typography className="animate delay-1" variant="h4" gutterBottom sx={{ mb: 3 }}>
          Experience
        </Typography>
        <Box className="parallax-experience" sx={{ mb: 4 }} />

        <Box>
          {experiences.map((exp, i) => (
            <Box
              key={exp.company}
              className={`animate delay-${i + 2}`}
              sx={{ display: "flex", mb: 2 }}
            >
              {/* Timeline indicator */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 2,
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    mt: "22px",
                    flexShrink: 0,
                  }}
                />
                {i < experiences.length - 1 && (
                  <Box
                    sx={{
                      width: 2,
                      flex: 1,
                      backgroundColor: theme.palette.primary.main,
                      opacity: 0.25,
                      mt: 1,
                      mb: -2,
                    }}
                  />
                )}
              </Box>

              {/* Card */}
              <Paper
                elevation={2}
                sx={{
                  flex: 1,
                  p: 3,
                  borderLeft: `3px solid ${theme.palette.primary.main}`,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  <Typography variant="h5">{exp.company}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, alignSelf: "center" }}
                  >
                    {exp.period}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    mb: 1.5,
                  }}
                >
                  {exp.role}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {exp.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {exp.tech.map((t) => (
                    <Chip key={t} label={t} size="small" variant="outlined" color="primary" />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Experience;
