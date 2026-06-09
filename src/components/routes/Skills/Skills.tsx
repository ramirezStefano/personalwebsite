import { FC } from "react";
import { Box, Chip, Grid, Paper, Typography, useTheme } from "@mui/material";
import "../../../App.css";

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Ruby", "C", "VBA", "Assembly (LC3)"],
  },
  {
    category: "Frontend",
    skills: ["React", "React Native", "Material UI", "Redux", "Formik", "Victory", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Ruby on Rails", "Firebase", "Google Cloud Platform", "Mapbox", "GPT-3.5 API", "Axios", "OAuth"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub Actions", "Vite", "Webpack", "Storybook", "Figma", "Prettier", "ESLint", "Bash", "YAML", "Markdown", "PNPM", "Turborepo", "Expo"],
  },
  {
    category: "Concepts",
    skills: ["CLI Unix", "IT Governance", "Discrete Mathematics", "REST APIs", ".env Configuration", "Monorepos"],
  },
];

const Skills: FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ gridAutoFlow: "row", padding: 2, paddingBottom: 15, minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8} sx={{ paddingTop: 15 }}>
        <Typography className="animate delay-1" variant="h4" gutterBottom sx={{ mb: 3 }}>
          Skills
        </Typography>
        <Box className="animate delay-2 parallax-skills" sx={{ mb: 4 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {skillGroups.map((group, i) => (
            <Paper
              key={group.category}
              className={`animate delay-${i + 2}`}
              elevation={2}
              sx={{
                p: 3,
                borderLeft: `3px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 2 }}
              >
                {group.category}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    color="primary"
                    sx={{
                      transition: "background-color 0.2s ease, color 0.2s ease",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Skills;
