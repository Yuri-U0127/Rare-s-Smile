import React from 'react';
import { Select, MenuItem } from '@mui/material';

const CustomEventSelect = ({ selectedValue }) => {

  const options = [
    { title: `次回受診日`, bgColor: "#F9D7E9", value: "next", color: "#E54D9E" },
    { title: `受診時報告事項`, bgColor: "#AAE5DF", value: "time", color: "#22998D" },
    { title: `体調管理`, bgColor: "#92CEF3", value: "keep", color: "#0C5F92" },
    { title: `緊急連絡先`, bgColor: "#FDA09D", value: "contact", color: "white" },
    { title: `その他`, bgColor: "#AFB0B0", value: "others", color: "#5A5A5A" },
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
        width: "150px"
      }}
    >
      {options.map((option, index) => (
        <MenuItem key={option.value} value={option.value}>
          {
            <div className='flex justify-between relative'>
              <div className='' style={{ backgroundColor: option.bgColor, padding: "5px 8px", borderRadius: "5px" }}><span style={{ color: option.color }}>{option.title}</span>
              </div>
            </div>}
        </MenuItem>
      ))}
    </Select>

  );
};

export default CustomEventSelect;