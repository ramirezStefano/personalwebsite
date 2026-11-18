import { FC } from "react";
import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { glassCard } from "../../../utils/styles/glassCard";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Grid
      display="grid"
      width="100vw"
      height="100vh"
      alignContent="center"
      justifyContent="center"
      sx={{ px: 2 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: "center",
          ...glassCard(theme),
        }}
      >
        <Typography
          variant="overline"
          sx={{
            display: "block",
            color: theme.palette.primary.main,
            fontWeight: 700,
            letterSpacing: "3px",
            mb: 1,
          }}
        >
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 1 }}>
          The page you're looking for doesn't exist or has moved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ErrorPage;
