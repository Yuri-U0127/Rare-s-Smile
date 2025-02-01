'use client'

import * as React from 'react';
import dynamic from "next/dynamic";

import FormControl from '@mui/joy/FormControl';
import { Box } from '@mui/material';
import Checkbox from '@mui/joy/Checkbox';
const CustomInput = dynamic(() => import('../../../components/ui/CustomInput.jsx'));
const LoginButton = dynamic(() => import('../../../components/ui/LoginButton.jsx'));
const ForStranger = dynamic(() => import('../../../components/ui/ForStranger.jsx'));
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function RegisterPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {!matches && <img src="/images/sp-banner-header.png" width="100%" />}
      <div className='shadow-xl w-[80%] mx-auto p-20 mt-[136px]  rounded-lg mb-[56px]'>
        <div className="flex text-center">
          <img src="/images/create_account.svg" className="mx-auto" />
        </div>
        <div className='w-[300px] mr-auto'>
          <CustomInput imgSrc={"/images/my_number_card.svg"} imgAlt={"Email Icon"} inputPlaceholder={"例) smile1234"} inputLab={"ユーザー名"} />
          <CustomInput imgSrc={"/images/email.svg"} imgAlt={"Email Icon"} inputPlaceholder={"例) sample@gmail.com "} inputLab={"メールアドレス"} />
        </div>
        <Box component="form" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2, width: "100%" }}>
          <CustomInput imgSrc={"/images/password.svg"} imgAlt={"Password Icon"} inputPlaceholder={"8文字以上の英数字"} inputLab={"パスワード"} />
          <FormControl>
            <Checkbox sx={{ color: "#5A5A5A" }} label="２段階認証を有効にする" name='qr-verify' />
          </FormControl>
        </Box>
        <div className='w-[300px] mr-auto'>
          <CustomInput imgSrc={"/images/password.svg"} imgAlt={"PasswordConfirm Icon"} inputPlaceholder={"8文字以上の英数字"} inputLab={"パスワード（確認用）"} />
          <br />
        </div >
        <div className='ml-6'>
          <FormControl>
            <Checkbox sx={{ color: "#5A5A5A" }} label="利用規約とプライバシーポリシーに同意します。" />
          </FormControl>
        </div>
        <LoginButton />
      </div >
      <div className='shadow-xl w-[80%] mx-auto p-20 mt-[136px] rounded-lg  mb-[56px]'>
        <ForStranger />
      </div>
    </>
  )
}