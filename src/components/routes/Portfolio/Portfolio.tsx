import { FC } from "react";
import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import "../../../App.css";
import PageHeader from "../../PageHeader/PageHeader";
import { glassCard } from "../../../utils/styles/glassCard";
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

interface TechIcon {
  src: string;
  label: string;
}

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  name: string;
  type: string;
  description: string;
  icons: TechIcon[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    name: "Financial Advisors",
    type: "Professional",
    description:
      "Production SaaS platform for financial advisors, built on Astro and React. Sole engineer owning the full stack — from Cloudflare Workers/D1 infrastructure and Stripe billing to an AI Visibility Probe system that tests whether advisor profiles are surfaced and cited by Claude, GPT, and Gemini through a multi-provider Cloudflare AI Gateway layer.",
    icons: [
      { src: ts, label: "TypeScript" },
      { src: react, label: "React" },
      { src: oauth, label: "OAuth" },
      { src: githubActions, label: "GitHub Actions" },
      { src: githubCopilot, label: "GitHub Copilot" },
      { src: github, label: "GitHub" },
    ],
    links: [{ label: "Visit Financial Advisors", href: "https://financialadvisors.com/" }],
  },
  {
    name: "babapp.io",
    type: "Product",
    description:
      "Full-stack web application built with agentic systems at its core. Leverages AI-driven workflows to automate and enhance user interactions, delivering an intelligent and responsive product experience.",
    icons: [
      { src: ts, label: "TypeScript" },
      { src: react, label: "React" },
      { src: mui, label: "MUI" },
      { src: vite, label: "Vite" },
      { src: router, label: "React Router" },
      { src: firebase, label: "Firebase" },
      { src: axios, label: "Axios" },
      { src: githubCopilot, label: "GitHub Copilot" },
      { src: github, label: "GitHub" },
    ],
    links: [{ label: "Visit babapp.io", href: "https://babapp.io" }],
  },
  {
    name: "HoneyGrid",
    type: "Professional",
    description:
      "Software engineer at HoneyGrid. Started on the React Native mobile app using Material Paper, then transitioned to the main React web application. Worked across the full product lifecycle including feature development, state management, and third-party integrations.",
    icons: [
      { src: react, label: "React" },
      { src: redux, label: "Redux" },
      { src: ts, label: "TypeScript" },
      { src: mui, label: "MUI" },
      { src: router, label: "React Router" },
      { src: firebase, label: "Firebase" },
      { src: axios, label: "Axios" },
      { src: mapbox, label: "Mapbox" },
      { src: expo, label: "Expo" },
      { src: googleCloud, label: "Google Cloud" },
      { src: storybook, label: "Storybook" },
      { src: vite, label: "Vite" },
      { src: viteTest, label: "Vitest" },
      { src: zod, label: "Zod" },
      { src: turbo, label: "Turborepo" },
      { src: figma, label: "Figma" },
      { src: githubCopilot, label: "GitHub Copilot" },
      { src: visualStudio, label: "VS Code" },
      { src: slack, label: "Slack" },
      { src: commitizen, label: "Commitizen" },
      { src: prettier, label: "Prettier" },
      { src: bash, label: "Bash" },
      { src: json, label: "JSON" },
      { src: css, label: "CSS" },
      { src: github, label: "GitHub" },
    ],
    links: [{ label: "Visit HoneyGrid", href: "https://honeygrid.ai/" }],
  },
  {
    name: "Signature Generator",
    type: "Open Source",
    description:
      "Pro-bono project building an HTML email signature generator using Node, Webpack, and React Spectrum. Explored component isolation with Storybook and set up automated build and deployment via GitHub Actions and GitHub Pages.",
    icons: [
      { src: ts, label: "TypeScript" },
      { src: html, label: "HTML" },
      { src: react, label: "React" },
      { src: webpack, label: "Webpack" },
      { src: storybook, label: "Storybook" },
      { src: githubActions, label: "GitHub Actions" },
      { src: oauth, label: "OAuth" },
      { src: axios, label: "Axios" },
      { src: yarn, label: "Yarn" },
      { src: nvm, label: "NVM" },
      { src: yaml, label: "YAML" },
      { src: markdown, label: "Markdown" },
      { src: prettier, label: "Prettier" },
      { src: json, label: "JSON" },
      { src: css, label: "CSS" },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/evargast/signature-generator",
      },
    ],
  },
  {
    name: "Personal Website",
    type: "Side Project",
    description:
      "This website. A side project started at the recommendation of a senior engineer at HoneyGrid to practice new technologies and keep skills sharp. Continuously refactored and updated — currently built with React, TypeScript, and MUI.",
    icons: [
      { src: ts, label: "TypeScript" },
      { src: react, label: "React" },
      { src: mui, label: "MUI" },
      { src: vite, label: "Vite" },
      { src: router, label: "React Router" },
      { src: pnpm, label: "PNPM" },
      { src: githubActions, label: "GitHub Actions" },
      { src: figma, label: "Figma" },
      { src: visualStudio, label: "VS Code" },
      { src: storybook, label: "Storybook" },
      { src: prettier, label: "Prettier" },
      { src: bash, label: "Bash" },
      { src: markdown, label: "Markdown" },
      { src: html, label: "HTML" },
      { src: css, label: "CSS" },
      { src: json, label: "JSON" },
      { src: github, label: "GitHub" },
    ],
    links: [
      {
        label: "View Source",
        href: "https://github.com/ramirezStefano/ramirezStefano.github.io",
      },
    ],
  },
];

const Portfolio: FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ padding: 2, paddingBottom: 15, minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8} sx={{ paddingTop: 15 }}>
        <PageHeader eyebrow="Selected Work" title="Portfolio" />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {projects.map((project, i) => (
            <Paper
              key={project.name}
              className={`animate delay-${i + 2}`}
              elevation={0}
              sx={{
                p: 3,
                ...glassCard(theme),
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
                <Typography variant="h5" component="h2">{project.name}</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, alignSelf: "center" }}
                >
                  {project.type}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 3 }}>
                {project.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: 3,
                }}
              >
                {project.icons.map((icon) => (
                  <Box
                    key={icon.label}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0.5,
                      width: 56,
                    }}
                  >
                    <img alt={`${icon.label} icon`} src={icon.src} width={36} height={36} style={{ objectFit: "contain" }} />
                    <Typography variant="caption" sx={{ textAlign: "center", lineHeight: 1.2 }}>
                      {icon.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    variant="outlined"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: theme.palette.primary.main, borderColor: theme.palette.primary.main }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
