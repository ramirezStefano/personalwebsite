import { FC } from "react";
import { Box, Chip, Grid, Paper, Typography, useTheme } from "@mui/material";
import "../../../App.css";
import PageHeader from "../../PageHeader/PageHeader";
import { glassCard } from "../../../utils/styles/glassCard";

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
    skills: ["React", "React Native", "Astro", "Material UI", "Redux", "Formik", "Victory", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Ruby on Rails", "Cloudflare Workers", "Cloudflare D1", "Firebase", "Stripe", "Mapbox", "Anthropic SDK", "OpenAI API", "Gemini API", "Axios", "OAuth"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub Actions", "Wrangler", "Vite", "Webpack", "Storybook", "Figma", "Prettier", "ESLint", "Bash", "YAML", "Markdown", "PNPM", "Turborepo", "Expo"],
  },
  {
    category: "Concepts",
    skills: ["CI/CD Pipelines", "Multi-Provider AI Routing", "CLI Unix", "IT Governance", "Discrete Mathematics", "REST APIs", ".env Configuration", "Monorepos"],
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
        <PageHeader eyebrow="Toolbox" title="Skills" />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {skillGroups.map((group, i) => (
            <Paper
              key={group.category}
              className={`animate delay-${i + 2}`}
              elevation={0}
              sx={{
                p: 3,
                ...glassCard(theme),
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
