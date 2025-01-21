'use client'

import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ width, height, isoutlined, borderradius, fontSize, display, center, moreCustom }) => ({
  marginInline: center ? "auto" : "inherit",
  boxSizing: "border-box",
  backgroundColor: isoutlined ? "white" : "#22998D",
  backgroundImage: isoutlined ? "none" : "linear-gradient(180deg, #75D1C1, #0D9890)",
  color: isoutlined ? "#46D0C9" : "#FFFFFF",
  padding: "10px 20px",
  borderRadius: borderradius || "30px",
  fontWeight: "bold",
  fontSize: fontSize || "16px",
  border: isoutlined ? "3px solid #46D0C9" : "none",
  borderImage: "linear-grandient(right ,#75D1C1, #034B44)",
  borderImageSlice: "1",
  width: width || "auto",
  height: height || "40px",
  boxShadow: isoutlined ? "none" : "0px 2px 5px rgba(0, 0, 0, 0.15)",
  textTransform: "none",
  display: display || "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "1px 1px 10px  #aaaaaa",
  "&:hover": {
    boxShadow: isoutlined ? "3px 3px 10px #22998D" : "1px 1px 10px  #aaaaaa",
    backgroundImage: isoutlined ? "#FFFFFF" : "linear-gradient(180deg, #C9E1DD, #15CBC0)",

  },
}));

const CustomButton = ({
  moreCustom,
  center,
  text,
  onClick,
  startIcon,
  subIcon,
  width,
  height,
  isoutlined,
  borderradius,
  display,
  fontsize,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      startIcon={startIcon}
      width={width}
      height={height}
      borderradius={borderradius}
      display={display}
      fontSize={fontsize}
      {...props}
    >
      {moreCustom ? text : <span style={{ marginRight: subIcon ? "8px" : "0", fontSize: "large" }}>{text}</span>}
      {subIcon && <span>{subIcon}</span>}
    </StyledButton>
  );
};

export default CustomButton;
