import React from 'react';
import { Select, MenuItem } from '@mui/material';

const CustomColorSelect = ({ selectedValue }) => {

  const options = [
    { value: `pink`, label: "#F9D7E9" },
    { value: `green`, label: "#AAE5DF" },
    { value: `blue`, label: "#92CEF3" },
    { value: `red`, label: "#FDA09D" },
    { value: `grey`, label: "#AFB0B0" },
  ]

  return (
    <Select
      value={selectedValue}
      variant="standard"
      disableUnderline
      sx={{
        boxShadow: "1px 1px 1px #ddd",
        borderRadius: "5px",
        flex: 1,
        padding: "8px 12px",
        "& .MuiSelect-select": { padding: 0 },
        "& .MuiSelect-icon": { color: "#00B7D4" },
      }}
    >
      {options.map((option, index) => (
        <MenuItem key={option.value} value={option.value}>
          {<div className="min-h-[25px] min-w-[25px] rounded-[50%]" style={{ backgroundColor: option.label, padding: "5px 8px" }}></div>}
        </MenuItem>
      ))}
    </Select>

  );
};

export default CustomColorSelect;