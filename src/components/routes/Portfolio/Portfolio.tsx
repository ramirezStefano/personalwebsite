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
import ts from "../../../assets/icons/typescript.svg";
import html from "../../../assets/icons/html5.svg";
import mui from "../../../assets/icons/mui.svg";
import axios from "../../../assets/icons/axios.svg";
import firebase from "../../../assets/icons/firebaseIcon.svg";
import json from "../../../assets/icons/jsonIcon.svg";
import router from "../../../assets/icons/reactRouterIcon.svg";
import storybook from "../../../assets/icons/storybookIcon.svg";
import react from "../../../assets/icons/react.svg";
import redux from "../../../assets/icons/redux.svg";
import pnpm from "../../../assets/icons/pnpmIcon.svg";
import markdown from "../../../assets/icons/markdownIcon.svg";
import prettier from "../../../assets/icons/prettierIcon.svg";
import css from "../../../assets/icons/cssIcon.svg";
import commitizen from "../../../assets/icons/commitizen.svg";
import github from "../../../assets/icons/github-octocat.svg";
import slack from "../../../assets/icons/slack-icon.svg";
import expo from "../../../assets/icons/expo-icon.svg";
import figma from "../../../assets/icons/figma.svg";
import githubCopilot from "../../../assets/icons/github-copilot.svg";
import googleCloud from "../../../assets/icons/google-cloud.svg";
import visualStudio from "../../../assets/icons/visual-studio-code.svg";
import vite from "../../../assets/icons/vitejs.svg";
import viteTest from "../../../assets/icons/vitest.svg";
import zod from "../../../assets/icons/zod.svg";
import bash from "../../../assets/icons/bash-icon.svg";
import mapbox from "../../../assets/icons/mapbox-icon.svg";
import turbo from "../../../assets/icons/turborepo.svg";
import yarn from "../../../assets/icons/yarn-icon.svg";
import githubActions from "../../../assets/icons/github-actions.svg";
import nvm from "../../../assets/icons/nvm.svg";
import webpack from "../../../assets/icons/webpack.svg";
import oauth from "../../../assets/icons/oauth.svg";
import yaml from "../../../assets/icons/yaml-icon.svg";

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
          paddingBottom: 12,
          minHeight: "100vh",
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
              Main Technologies Used:
            </Typography>
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"repeat(auto-fit, minmax(100px, 1fr))"}
              gap={2}
              alignItems={"center"}
              justifyItems={"center"}
              marginY={4}
              className={"animate delay-7"}
            >
              <Grid item>
                <img alt="React_icon" src={react} width={50} />
                <Typography>React</Typography>
              </Grid>
              <Grid item>
                <img alt="Redux_icon" src={redux} width={50} />
                <Typography>Redux</Typography>
              </Grid>
              <Grid item>
                <img alt="TypeScript_icon" src={ts} width={50} />
                <Typography>TypeScript</Typography>
              </Grid>
              <Grid item>
                <img alt="MUI_icon" src={mui} width={50} />
                <Typography>MUI</Typography>
              </Grid>
              <Grid item>
                <img alt="ReactRouter_icon" src={router} width={50} />
                <Typography>React Router</Typography>
              </Grid>
              <Grid item>
                <img alt="Firebase_icon" src={firebase} width={50} />
                <Typography>Firebase</Typography>
              </Grid>
              <Grid item>
                <img alt="Axios_icon" src={axios} width={50} />
                <Typography>Axios</Typography>
              </Grid>
              <Grid item>
                <img alt="Storybook_icon" src={storybook} width={50} />
                <Typography>Storybook</Typography>
              </Grid>
              <Grid item>
                <img alt="Prettier_icon" src={prettier} width={50} />
                <Typography>Prettier</Typography>
              </Grid>
              <Grid item>
                <img alt="CSS_icon" src={css} width={50} />
                <Typography>CSS</Typography>
              </Grid>
              <Grid item>
                <img alt="JSON_icon" src={json} width={50} />
                <Typography>JSON</Typography>
              </Grid>
              <Grid item>
                <img alt="Commitizen_icon" src={commitizen} width={50} />
                <Typography>Commitizen</Typography>
              </Grid>
              <Grid item>
                <img alt="GitHub_icon" src={github} width={50} />
                <Typography>GitHub</Typography>
              </Grid>
              <Grid item>
                <img alt="Slack_icon" src={slack} width={50} />
                <Typography>Slack</Typography>
              </Grid>
              <Grid item>
                <img alt="expo_icon" src={expo} width={50} />
                <Typography>Expo</Typography>
              </Grid>
              <Grid item>
                <img alt="Figma_icon" src={figma} width={50} />
                <Typography>Figma</Typography>
              </Grid>
              <Grid item>
                <img alt="GithubCopilot_icon" src={githubCopilot} width={50} />
                <Typography>Github Copilot</Typography>
              </Grid>
              <Grid item>
                <img alt="GoogleCloud_icon" src={googleCloud} width={50} />
                <Typography>Google Cloud</Typography>
              </Grid>
              <Grid item>
                <img alt="VisualStudio_icon" src={visualStudio} width={50} />
                <Typography>Visual Studio</Typography>
              </Grid>
              <Grid item>
                <img alt="vite_icon" src={vite} width={50} />
                <Typography>Vite</Typography>
              </Grid>
              <Grid item>
                <img alt="ViTest_icon" src={viteTest} width={50} />
                <Typography>Vi Test</Typography>
              </Grid>
              <Grid item>
                <img alt="Zod_icon" src={zod} width={50} />
                <Typography>Zod</Typography>
              </Grid>
              <Grid item>
                <img alt="Bash_icon" src={bash} width={50} />
                <Typography>Bash</Typography>
              </Grid>
              <Grid item>
                <img alt="Mapbox_icon" src={mapbox} width={50} />
                <Typography>Mapbox</Typography>
              </Grid>
              <Grid item>
                <img alt="TurboRepo_icon" src={turbo} width={50} />
                <Typography>Turbo Repo</Typography>
              </Grid>
            </Grid>
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
              Main Technologies Used:
            </Typography>

            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"repeat(auto-fit, minmax(100px, 1fr))"}
              gap={2}
              alignItems={"center"}
              justifyItems={"center"}
              marginY={4}
            >
              <Grid item>
                <img alt="TypeScript_icon" src={ts} width={50} />
                <Typography>TypeScript</Typography>
              </Grid>
              <Grid item>
                <img alt="HTML_icon" src={html} width={50} />
                <Typography>HTML</Typography>
              </Grid>
              <Grid item>
                <img alt="React_icon" src={react} width={50} />
                <Typography>React</Typography>
              </Grid>
              <Grid item>
                <img alt="Yarn_icon" src={yarn} width={50} />
                <Typography>Yarn</Typography>
              </Grid>
              <Grid item>
                <img alt="GithubActions_icon" src={githubActions} width={50} />
                <Typography>Github Actions</Typography>
              </Grid>
              <Grid item>
                <img alt="NVM_icon" src={nvm} width={50} />
                <Typography>NVM</Typography>
              </Grid>
              <Grid item>
                <img alt="Webpack_icon" src={webpack} width={50} />
                <Typography>Webpack</Typography>
              </Grid>
              <Grid item>
                <img alt="Oauth_icon" src={oauth} width={50} />
                <Typography>OAuth</Typography>
              </Grid>
              <Grid item>
                <img alt="yaml_icon" src={yaml} width={50} />
                <Typography>YAML</Typography>
              </Grid>
              <Grid item>
                <img alt="Axios_icon" src={axios} width={50} />
                <Typography>Axios</Typography>
              </Grid>
              <Grid item>
                <img alt="JSON_icon" src={json} width={50} />
                <Typography>JSON</Typography>
              </Grid>
              <Grid item>
                <img alt="Storybook_icon" src={storybook} width={50} />
                <Typography>Storybook</Typography>
              </Grid>
              <Grid item>
                <img alt="Markdown_icon" src={markdown} width={50} />
                <Typography>Markdown</Typography>
              </Grid>
              <Grid item>
                <img alt="Prettier_icon" src={prettier} width={50} />
                <Typography>Prettier</Typography>
              </Grid>
              <Grid item>
                <img alt="CSS_icon" src={css} width={50} />
                <Typography>CSS</Typography>
              </Grid>
            </Grid>
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
            <Typography>Main Technologies Used:</Typography>
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"repeat(auto-fit, minmax(100px, 1fr))"}
              gap={2}
              alignItems={"center"}
              justifyItems={"center"}
              marginY={4}
            >
              <Grid item>
                <img alt="TypeScript_icon" src={ts} width={50} />
                <Typography>Typescript</Typography>
              </Grid>
              <Grid item>
                <img alt="HTML_icon" src={html} width={50} />
                <Typography>HTML</Typography>
              </Grid>
              <Grid item>
                <img alt="React_icon" src={react} width={50} />
                <Typography>React</Typography>
              </Grid>
              <Grid item>
                <img alt="MUI_icon" src={mui} width={50} />
                <Typography>MUI</Typography>
              </Grid>
              <Grid item>
                <img alt="JSON_icon" src={json} width={50} />
                <Typography>JSON</Typography>
              </Grid>
              <Grid item>
                <img alt="ReactRouter_icon" src={router} width={50} />
                <Typography>React Router</Typography>
              </Grid>
              <Grid item>
                <img alt="Storybook_icon" src={storybook} width={50} />
                <Typography>Storybook</Typography>
              </Grid>
              <Grid item>
                <img alt="Pnpm_icon" src={pnpm} width={50} />
                <Typography>PNPM</Typography>
              </Grid>
              <Grid item>
                <img alt="GithubActions_icon" src={githubActions} width={50} />
                <Typography>Github Actions</Typography>
              </Grid>
              <Grid item>
                <img alt="Markdown_icon" src={markdown} width={50} />
                <Typography>Markdown</Typography>
              </Grid>
              <Grid item>
                <img alt="Prettier_icon" src={prettier} width={50} />
                <Typography>Prettier</Typography>
              </Grid>
              <Grid item>
                <img alt="CSS_icon" src={css} width={50} />
                <Typography>CSS</Typography>
              </Grid>
              <Grid item>
                <img alt="vite_icon" src={vite} width={50} />
                <Typography>Vite</Typography>
              </Grid>
              <Grid item>
                <img alt="Bash_icon" src={bash} width={50} />
                <Typography>Bash</Typography>
              </Grid>
              <Grid item>
                <img alt="GitHub_icon" src={github} width={50} />
                <Typography>GitHub</Typography>
              </Grid>
              <Grid item>
                <img alt="Figma_icon" src={figma} width={50} />
                <Typography>Figma</Typography>
              </Grid>
              <Grid item>
                <img alt="VisualStudio_icon" src={visualStudio} width={50} />
                <Typography>Visual Studio</Typography>
              </Grid>
            </Grid>
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
