import React from 'react';
import { Box } from '@mui/material';

const CustomBox = ({ shadowColor, borderRadius, customPadding, widthControl, minWidth, margin, children }) => {
  return (
    <Box sx={{
      width: widthControl ? "fit-content" : widthControl,
      minWidth: minWidth,
      boxShadow: `1px 1px 2px 1px ${shadowColor}`,
      borderRadius: borderRadius,
      padding: customPadding || "20px 30px 30px 30px",
      textAlign: "center",
      overflow: "hidden",
      margin: margin || "0px",
    }}>
      {children}
    </Box>
  )
};
export default CustomBox;
