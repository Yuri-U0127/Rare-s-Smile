import Button from "@mui/material/Button";
import { borderRadius, styled } from "@mui/system";

const StyledButton = styled(Button)(({ width, height, isDelete, borderradius, fontSize, display, padding }) => ({
  boxSizing: "border-box",
  backgroundColor: !isDelete ? "white" : "#DD3A3A",
  color: !isDelete ? "#46D0C9" : "white",
  borderRadius: borderradius || "30px",
  fontWeight: "bold",
  fontSize: fontSize || "16px",
  border: !isDelete ? "3px solid #46D0C9" : "none",
  borderImage: "linear-grandient(right ,#75D1C1, #034B44)",
  borderImageSlice: "1",
  width: width || "auto",
  height: height || "40px",
  boxShadow: !isDelete ? "none" : "0px 2px 5px rgba(0, 0, 0, 0.15)",
  textTransform: "none",
  display: display || "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "1px 1px 10px  #aaaaaa",
  "&:hover": {
    boxShadow: !isDelete ? "3px 3px 10px #22998D" : "1px 1px 10px  #aaaaaa",
    backgroundColor: isDelete ? "#E05B5B" : "inherit",

  },
}));

const MemoButton = ({
  text,
  onClick,
  startIcon,
  subIcon,
  width,
  height,
  isDelete,
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
      isDelete={isDelete}
      borderradius={borderradius}
      display={display}
      fontSize={fontsize}
      padding={padding}
      {...props}
    >
      <div className="flex gap-2 items-center justify-center">
        <div>
          <span style={{ marginRight: subIcon ? "8px" : "0" }}>{text}</span>
          <img className="inline" src={subIcon} alt="" />
        </div>
      </div>
    </StyledButton>
  );
};

export default MemoButton;
