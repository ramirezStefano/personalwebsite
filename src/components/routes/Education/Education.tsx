import { FC } from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import "../../../App.css";
import { ChevronRight } from "@mui/icons-material";

interface EducationProps {}

const Education: FC<EducationProps> = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        gridAutoFlow: "row",
        padding: 2,
        paddingBottom: 10,
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12} sm={8} sx={{ paddingY: 15 }}>
        <Paper className={"animate delay-1"} sx={{ padding: 2, margin: 2 }}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <Box className="parallax-education" />

          <Grid
            display={"grid"}
            container
            gridAutoFlow={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            className={"animate delay-2"}
          >
            <ChevronRight className={"animate delay-3"} />
            <Typography className={"animate delay-4"} variant="body1" paragraph>
              British School of Costa Rica International Baccalaureate Diploma
              with Higher Levels classes in Computer Science, English Language
              and Literature, and Physics.
            </Typography>
          </Grid>
          <Divider className={"animate delay-5"} />
          <Grid
            display={"grid"}
            container
            gridAutoFlow={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            className="animate delay-6"
          >
            <ChevronRight className={"animate delay-7"} />
            <Typography className={"animate delay-8"} paragraph marginTop={2}>
              Higher education at University of California, Santa Cruz (UCSC)
              Pursued a degree in Computer Science B.S.
            </Typography>
          </Grid>
          <Divider className={"animate delay-9"} />

          <Grid
            display={"grid"}
            container
            gridAutoFlow={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            className="animate delay-10"
          >
            <ChevronRight className={"animate delay-11"} />
            <Typography paragraph marginTop={2} className={"animate delay-12"}>
              Github Workshops at (UCSC) Multi day workshop give by UC Berkley
              professor on the use of GitHub and best practices.
            </Typography>
          </Grid>
          <Divider className={"animate delay-13"} />
          <Grid
            display={"grid"}
            container
            gridAutoFlow={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
            className="animate delay-14"
          >
            <ChevronRight className={"animate delay-15"} />
            <Typography marginTop={2} className={"animate delay-16"}>
              LinkedIn Certified in Career Skills in Software Development.
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Education;
