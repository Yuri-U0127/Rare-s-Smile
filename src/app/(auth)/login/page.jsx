'use client'

import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import { useRef, useState } from 'react'

import CustomInput from '../../../components/ui/CustomInput.jsx';
import Checkbox from '@mui/joy/Checkbox';
import LoginButton from '../../../components/ui/LoginButton.jsx'
import ForStranger from '../../../components/ui/ForStranger.jsx'
import ConfirmModal from '../../../components/ui/ConfirmModal.jsx'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function LoginPage() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));


  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {!matches && <img src="/images/sp-banner-header.png" width="100%" />}
      <div className='shadow-xl w-full mx-auto p-20 mt-[136px]  rounded-lg mb-[56px]' style={{ maxWidth: "800px" }}>
        <div className="flex text-center">
          <img src="/images/login.svg" className="mx-auto" />
        </div>
        <div className="text-[#2ABFB0] text-[32px] text-center mt-[64px]">メールアドレスでログイン</div>
        <div className='mx-auto' style={{ maxWidth: "600px" }}>
          <CustomInput imgSrc={"/images/email.svg"} imgAlt={"Email Icon"} inputPlaceholder={"例) sample@gmail.com "} inputLab={"メールアドレス"} />
          <CustomInput imgSrc={"/images/password.svg"} imgAlt={"Password Icon"} inputPlaceholder={"8文字以上の英数字"} inputLab={"パスワード"} />
          <FormControl >
            <Checkbox sx={{ color: "#5A5A5A" }} label="２段階認証を有効にする" name='qr-verify' />
          </FormControl>
          <div className='flex mt-8 mb-3 ml-[30%] cursor-pointer' onClick={() => setIsModalOpen(true)}>
            <img src="/images/help.svg" alt="" />
            パスワードをお忘れですか？
          </div>
          <LoginButton />
        </div>
      </div>
      <div className='shadow-xl w-full mx-auto p-20 mt-[136px] rounded-lg  mb-[56px]' style={{ maxWidth: "800px" }}>
        <ForStranger />
      </div>
      <ConfirmModal modalOpen={isModalOpen} onModalClose={() => setIsModalOpen(false)} />
    </>
  )
}