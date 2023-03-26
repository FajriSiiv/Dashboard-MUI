import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ArrowDownward, FilterAlt } from "@mui/icons-material";
import { Checkbox, ListItemText } from "@mui/material";

export default function FilterSelect(props?: any) {
  return (
    <Box sx={{ maxWidth: 150, width: 150 }}>
      <FormControl fullWidth>
        <InputLabel size="small" sx={{ display: "flex", alignItems: "center" }}>
          <FilterAlt /> <span>Filter</span>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ height: "40px", width: 150, textTransform: "capitalize" }}
          label={
            <>
              <FilterAlt /> <span>Filter</span>
            </>
          }
          multiple
          value={props.value}
          onChange={props.handleChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {props.arrayVal.map((name: any) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={props.value.indexOf(name) > -1} />
              <ListItemText
                primary={name}
                sx={{ textTransform: "capitalize" }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
