import { FC } from "react";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import "../../../App.css";

interface EducationEntry {
  institution: string;
  credential: string;
  type: string;
  description: string;
}

const entries: EducationEntry[] = [
  {
    institution: "British School of Costa Rica",
    credential: "International Baccalaureate Diploma",
    type: "Pre-University",
    description:
      "Higher Level courses in Computer Science, English Language and Literature, and Physics. Developed a strong foundation in analytical thinking and scientific method.",
  },
  {
    institution: "University of California, Santa Cruz",
    credential: "B.S. Computer Science",
    type: "Undergraduate",
    description:
      "Pursued a Bachelor of Science in Computer Science at UCSC. Coursework spanned algorithms, data structures, discrete mathematics, systems programming, and software engineering.",
  },
  {
    institution: "GitHub Workshops — UCSC",
    credential: "Collaborative Development Workshop",
    type: "Extracurricular",
    description:
      "Multi-day workshop delivered by a UC Berkeley professor covering GitHub workflows, branching strategies, pull request etiquette, and collaborative open-source best practices.",
  },
  {
    institution: "LinkedIn Learning",
    credential: "Career Skills in Software Development",
    type: "Certification",
    description:
      "Completed LinkedIn's certified curriculum on career skills for software engineers, covering professional communication, agile methodologies, and engineering team dynamics.",
  },
];

const Education: FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ padding: 2, paddingBottom: 15, minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8} sx={{ paddingY: 15 }}>
        <Typography className="animate delay-1" variant="h4" gutterBottom sx={{ mb: 3 }}>
          Education
        </Typography>
        <Box className="parallax-education" sx={{ mb: 4 }} />

        <Box>
          {entries.map((entry, i) => (
            <Box key={entry.institution} className={`animate delay-${i + 2}`} sx={{ display: "flex", mb: 2 }}>
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
                {i < entries.length - 1 && (
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
                  <Typography variant="h5">{entry.institution}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, alignSelf: "center" }}
                  >
                    {entry.type}
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
                  {entry.credential}
                </Typography>
                <Typography variant="body1">{entry.description}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Education;
