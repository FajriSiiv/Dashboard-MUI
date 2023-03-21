import styled from "@emotion/styled";
import {
  Box,
  Stack,
  createTheme,
  ThemeProvider,
  PaletteOptions,
  PaletteMode,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [modes, setModes] = useState<PaletteMode>("dark");

  const paletteOptions: PaletteOptions = {
    mode: modes,
  };

  const darkTheme = createTheme({
    palette: paletteOptions,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Navbar /> */}
        <h1>ssss</h1>
      </Box>
    </ThemeProvider>
  );
}

export default App;
