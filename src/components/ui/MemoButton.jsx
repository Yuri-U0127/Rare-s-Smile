import Button from "@mui/material/Button";
import { borderRadius, styled } from "@mui/system";

const StyledButton = styled(Button)(({ width, height, isoutlined, borderradius, fontSize, display, padding }) => ({
  boxSizing: "border-box",
  backgroundColor: isoutlined ? "white" : "#2ABFB0",
  color: isoutlined ? "grey" : "#FFFFFF",
  padding: padding ? `${padding} !important` : "10px 20px",
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
    backgroundColor: isoutlined ? "inherit" : "#2ABFB0",

  },
}));

const MemoButton = ({
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
  padding,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      startIcon={startIcon}
      width={width}
      height={height}
      isoutlined={isoutlined}
      borderradius={borderradius}
      display={display}
      fontSize={fontsize}
      padding={padding}
      {...props}
    >
      <span style={{ marginRight: subIcon ? "8px" : "0" }}>{text}</span>
      <img src={subIcon} alt="" />
    </StyledButton>
  );
};

export default MemoButton;
