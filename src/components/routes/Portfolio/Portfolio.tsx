import { FC } from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ padding: 2, marginTop: 12, marginBottom: 8 }}
      >
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 2, marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom>
              Portfolio
            </Typography>
            <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
              <Typography variant="h5">HoneyGrid</Typography>
              <Typography variant="body1" paragraph>
                Description: Software engineer at HoneyGrid, mainly worked on
                react native using the material library for native (Paper). An
                then moved to the main react node application on web.
              </Typography>

              <Typography variant="body1" paragraph>
                Technologies Used: List of technologies used in the project.
                Link:
              </Typography>
              <Typography variant="body1" paragraph>
                Sadly this is a private repository but you can check out the
                amazing product we built.
              </Typography>
              <Link to="https://honeygrid.ai/">Checkout HoneyGrid here!</Link>
            </Paper>

            <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
              <Typography variant="h5">Signature Generator</Typography>
              <Typography variant="body1" paragraph>
                Description: Software engineer pro-bono, mainly worked on a
                signature generator in html for email. App using node, webpack
                and react-spectrum. Part of the project was to experiment with
                Storybook making isolated components. Also setting up the
                projects building and deployment using github actions and github
                pages.
              </Typography>
              <Typography variant="body1" paragraph>
                Technologies Used: List of technologies used in the project.
                Link:
              </Typography>
              <Typography variant="body1" paragraph>
                Link to the project or its repository.
              </Typography>
              <Link to="https://github.com/evargast/signature-generator">
                Checkout our email signature generator here!
              </Link>
            </Paper>

            <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
              <Typography variant="h5">Personal Website</Typography>
              <Typography variant="body1" paragraph>
                Description: Software engineer pro-bono. This website itself has
                been a side project that started while working in HoneyGrid as
                proposed and recommended by one of the senior engineers to
                further practice and experiment with new technologies and keep
                honing and mastering other skills. As of this writing this
                website is still under development with constant refactors where
                needed and updates.
              </Typography>
              <Typography></Typography>
              <Typography variant="body1" paragraph>
                Technologies Used:
              </Typography>
              <Divider />

              <Link to="https://vitejs.dev/">Vite</Link>
              <Divider />

              <Link to="https://react.dev/">React</Link>
              <Divider />

              <Link to="https://pages.github.com/">Github Pages</Link>
              <Divider />

              <Link to="https://www.godaddy.com/">GoDaddy</Link>
              <Divider />

              <Link to="https://mui.com/">Material UI</Link>
              <Divider />

              <Link to="https://reactrouter.com/en/main">React-router</Link>
              <Divider />

              <Typography variant="body1" paragraph>
                Link to the repo:
              </Typography>
              <Link to="https://github.com/ramirezStefano/ramirezStefano.github.io">
                Here!
              </Link>
            </Paper>

            <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
              <Typography variant="body1" paragraph>
                Other: CLI Unix Commands, Assembly Language (LC3), Markdown
              </Typography>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
