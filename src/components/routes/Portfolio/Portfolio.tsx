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
import ts from "../../../assets/typescript.svg";
import html from "../../../assets/html5.svg";
import mui from "../../../assets/mui.svg";
import axios from "../../../assets/axios.svg";
import firebase from "../../../assets/firebaseIcon.svg";
import json from "../../../assets/jsonIcon.svg";
import router from "../../../assets/reactRouterIcon.svg";
import storybook from "../../../assets/storybookIcon.svg";
import react from "../../../assets/react.svg";
import redux from "../../../assets/redux.svg";
import pnpm from "../../../assets/pnpmIcon.svg";
import markdown from "../../../assets/markdownIcon.svg";
import prettier from "../../../assets/prettierIcon.svg";
import css from "../../../assets/cssIcon.svg";
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
              gridTemplateColumns={"repeat(3, 1fr)"}
              gap={2}
              alignItems={"center"}
              justifyItems={"center"}
              marginY={4}
            >
              <Grid item>
                <img alt="TypeScript_icon" src={ts} width={50} />
              </Grid>
              <Grid item>
                <img alt="HTML_icon" src={html} width={50} />
              </Grid>
              <Grid item>
                <img alt="React_icon" src={react} width={50} />
              </Grid>
              <Grid item>
                <img alt="Redux_icon" src={redux} width={50} />
              </Grid>
              <Grid item>
                <img alt="MUI_icon" src={mui} width={50} />
              </Grid>
              <Grid item>
                <img alt="Axios_icon" src={axios} width={50} />
              </Grid>
              <Grid item>
                <img alt="Firebase_icon" src={firebase} width={50} />
              </Grid>
              <Grid item>
                <img alt="JSON_icon" src={json} width={50} />
              </Grid>
              <Grid item>
                <img alt="ReactRouter_icon" src={router} width={50} />
              </Grid>
              <Grid item>
                <img alt="Storybook_icon" src={storybook} width={50} />
              </Grid>
              <Grid item>
                <img alt="Pnpm_icon" src={pnpm} width={50} />
              </Grid>
              <Grid item>
                <img alt="Markdown_icon" src={markdown} width={50} />
              </Grid>
              <Grid item>
                <img alt="Prettier_icon" src={prettier} width={50} />
              </Grid>
              <Grid item>
                <img alt="CSS_icon" src={css} width={50} />
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
              gridTemplateColumns={"repeat(3, 1fr)"}
              gap={2}
              alignItems={"center"}
              justifyItems={"center"}
              marginY={4}
            >
              <Grid item>
                <img alt="TypeScript_icon" src={ts} width={50} />
              </Grid>
              <Grid item>
                <img alt="HTML_icon" src={html} width={50} />
              </Grid>
              <Grid item>
                <img alt="React_icon" src={react} width={50} />
              </Grid>
              <Grid item>
                <img alt="Axios_icon" src={axios} width={50} />
              </Grid>
              <Grid item>
                <img alt="JSON_icon" src={json} width={50} />
              </Grid>
              <Grid item>
                <img alt="Storybook_icon" src={storybook} width={50} />
              </Grid>
              <Grid item>
                <img alt="Markdown_icon" src={markdown} width={50} />
              </Grid>
              <Grid item>
                <img alt="Prettier_icon" src={prettier} width={50} />
              </Grid>
              <Grid item>
                <img alt="CSS_icon" src={css} width={50} />
              </Grid>
              <Grid item></Grid>
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
              gridTemplateColumns={"repeat(3, 1fr)"}
              gap={2}
              alignItems={"center"}
              justifyItems={"center"}
              marginY={4}
            >
              <Grid item>
                <img alt="TypeScript_icon" src={ts} width={50} />
              </Grid>
              <Grid item>
                <img alt="HTML_icon" src={html} width={50} />
              </Grid>
              <Grid item>
                <img alt="React_icon" src={react} width={50} />
              </Grid>
              <Grid item>
                <img alt="MUI_icon" src={mui} width={50} />
              </Grid>
              <Grid item>
                <img alt="JSON_icon" src={json} width={50} />
              </Grid>
              <Grid item>
                <img alt="ReactRouter_icon" src={router} width={50} />
              </Grid>
              <Grid item>
                <img alt="Storybook_icon" src={storybook} width={50} />
              </Grid>
              <Grid item>
                <img alt="Pnpm_icon" src={pnpm} width={50} />
              </Grid>
              <Grid item>
                <img alt="Markdown_icon" src={markdown} width={50} />
              </Grid>
              <Grid item>
                <img alt="Prettier_icon" src={prettier} width={50} />
              </Grid>
              <Grid item>
                <img alt="CSS_icon" src={css} width={50} />
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
