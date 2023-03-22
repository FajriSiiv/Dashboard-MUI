import { Box, TextField } from "@mui/material";
import React from "react";

const SearchBar = (props?: any) => {
  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        size="small"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "search" }}
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
