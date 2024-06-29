import { FC } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        display={"grid"}
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Paper sx={{ padding: 4 }}>
          <Typography variant="body1" gutterBottom>
            Oops!
          </Typography>

          <Typography variant="body1" paragraph>
            Sorry, an unexpected error has occurred.
          </Typography>

          <Button onClick={() => navigate("/")}>Back To Home</Button>
        </Paper>
      </Grid>
    </>
  );
};

export default ErrorPage;
