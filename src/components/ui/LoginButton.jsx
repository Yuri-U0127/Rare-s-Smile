import CustomButton from "./CustomButton"

export default function LoginButton() {

  return (
    <>
      <CustomButton
        text="ログイン →"
        width={"400px"}
        height={"58px"}
        borderradius={"150px"}
        display={"block"}
        sx={{ marginInline: "auto", marginTop: "40px", marginButtom: "40px" }}
      />
    </>
  )
}