import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  const error: string | any = useRouteError();
  console.error(error);

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Oops!
      </Typography>

      <Typography variant="body1" paragraph>
        Sorry, an unexpected error has occurred.
      </Typography>

      <Typography>{error.statusText || error.message}</Typography>
    </>
  );
};

export default ErrorPage;
