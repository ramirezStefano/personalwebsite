import { FC } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import "../../../App.css";
interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  const style = useTheme();
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{
          gridAutoFlow: "row",
          padding: 2,
          paddingBottom: 10,
        }}
      >
        <Grid item xs={12} sm={8} sx={{ paddingTop: 15 }}>
          <Paper
            className={"animate delay-1"}
            sx={{ padding: 2, marginBottom: 4 }}
          >
            <Typography
              className={"animate delay-2"}
              variant="h4"
              gutterBottom
              marginTop={4}
            >
              Portfolio
            </Typography>
            <Box className="parallax-portfolio" />

            <Typography className={"animate delay-4"} variant="h5" gutterBottom>
              HoneyGrid
            </Typography>
            <Typography className={"animate delay-5"} variant="body1" paragraph>
              Description: Software engineer at HoneyGrid, mainly worked on
              react native using the material library for native (Paper). An
              then moved to the main react node application on web.
            </Typography>
            <Typography className={"animate delay-6"} variant="body1" paragraph>
              Technologies Used: List of technologies used in the project. Link:
            </Typography>
            <Typography className={"animate delay-7"} variant="body1" paragraph>
              Sadly this is a private repository but you can check out the
              amazing product we built.
            </Typography>

            <Button
              variant="outlined"
              href="https://honeygrid.ai/"
              style={{ color: style.palette.primary.main, marginBottom: 16 }}
            >
              Checkout HoneyGrid here!
            </Button>

            <Divider />

            <Typography
              className={"animate delay-4"}
              variant="h5"
              gutterBottom
              marginTop={4}
            >
              Signature Generator
            </Typography>
            <Typography className={"animate delay-5"} variant="body1" paragraph>
              Description: Software engineer pro-bono, mainly worked on a
              signature generator in html for email. App using node, webpack and
              react-spectrum. Part of the project was to experiment with
              Storybook making isolated components. Also setting up the projects
              building and deployment using github actions and github pages.
            </Typography>
            <Typography className={"animate delay-6"} variant="body1" paragraph>
              Technologies Used: List of technologies used in the project. Link:
            </Typography>

            <Button
              variant="outlined"
              href="https://github.com/evargast/signature-generator"
              style={{ color: style.palette.primary.main, marginBottom: 16 }}
            >
              Checkout our email signature generator here!
            </Button>
            <Divider />

            <Typography
              className={"animate delay-4"}
              variant="h5"
              gutterBottom
              marginTop={4}
            >
              Personal Website
            </Typography>
            <Typography className={"animate delay-5"} variant="body1" paragraph>
              Description: Software engineer pro-bono. This website itself has
              been a side project that started while working in HoneyGrid as
              proposed and recommended by one of the senior engineers to further
              practice and experiment with new technologies and keep honing and
              mastering other skills. As of this writing this website is still
              under development with constant refactors where needed and
              updates.
            </Typography>
            <Typography className={"animate delay-6"} variant="body1" paragraph>
              Link to the repo:
            </Typography>
            <Typography className={"animate delay-7"}>
              <Button
                variant="outlined"
                href="https://github.com/ramirezStefano/ramirezStefano.github.io"
                style={{ color: style.palette.primary.main, marginBottom: 16 }}
              >
                Here!
              </Button>
            </Typography>

            <Divider />

            <Typography variant="body1" paragraph marginTop={4}>
              Other: CLI Unix Commands, Assembly Language (LC3), Markdown
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
