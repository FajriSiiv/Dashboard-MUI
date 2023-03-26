import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Stack
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default Loading;
