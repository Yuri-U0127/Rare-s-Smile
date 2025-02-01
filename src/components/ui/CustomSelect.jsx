// components/CustomSelect.js
import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import Image from "next/image";

const CustomSelect = ({ iconSrc, options, value, onChange, sm }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      boxShadow="1px 1px 3px var(--darkc)"
      borderRadius="8px"
      overflow="hidden"
      width={sm ? "100%" : "80%"}
    >
      <Box
        display="flex"
        alignItems="center"
        bgcolor="var(--lightc)"
        padding="20px 8px"
        borderRight="1px solid #00B7D4"
      >
        <Image src={iconSrc} alt="Icon" width={16} height={16} />
        <Typography
          variant="body2"
          color="var(--darkc)"
          marginLeft="8px"
          fontWeight="bold"
        >
          常用薬一覧
        </Typography>
      </Box>
      <Select
        value={value}
        onChange={onChange}
        variant="standard"
        disableUnderline
        sx={{
          flex: 1,
          padding: "8px 12px",
          "& .MuiSelect-select": { padding: 0 },
          "& .MuiSelect-icon": { color: "#00B7D4" },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelect;
