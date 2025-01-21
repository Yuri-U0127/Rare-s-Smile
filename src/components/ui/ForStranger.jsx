import { Typography } from "@mui/material"
import CustomButton from "./CustomButton"

export default function LoginButton() {

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>はじめてご利用の方</Typography>
      <CustomButton
        text="新規登録  ＋"
        width={"400px"}
        height={"58px"}
        borderradius={"150px"}
        display={"block"}
        sx={{ marginInline: "auto", marginTop: "40px", marginButtom: "40px" }}
      />
    </>
  )
}