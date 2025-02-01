'use client'
import React, { useState } from 'react';
import dynamic from "next/dynamic";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const CustomInput = dynamic(() => import("../../../components/ui/CustomInput.jsx"));
const CustomOption = dynamic(() => import("../../../components/ui/CustomOption.jsx"));
const CustomColorSelect = dynamic(() => import("../../../components/ui/CustomColorSelect.jsx"));
const CustomButton = dynamic(() => import('../../../components/ui/CustomButton.jsx'));
const CustomEventSelect = dynamic(() => import('../../../components/ui/CustomEventSelect.jsx'));
const MemoButton = dynamic(() => import("../../../components/ui/MemoButton.jsx"));
const SocialInput = dynamic(() => import('../../../components/ui/SocialInput.jsx'));
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import GoBackButton from "../../../components/ui/global/GoBackButton.jsx";

export default function Profile() {

  const [counts, setCounts] = useState([])

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <Grid container>
      {/* Profile Header Left*/}
      <Grid item md={6} xs={12}>
        <div className='pt-[50px]'>
          <div className="flex justify-between">
            {!matches && <GoBackButton link="/" />}
            <Typography variant="h4" component="h2" sx={{ color: "var(--darkc)", fontFamily: "M PLUS Rounded 1c" }}>
              プロフィール
            </Typography>
            <div className="flex">
              <img src="/images/edit.svg" alt="" className="h-6" style={{ margin: matches ? '0' : "inherit" }} />
              編集する
            </div>
          </div>
        </div>
      </Grid>
      {matches ?
        <Grid item md={6} xs={12}>
          <div className='px-10'>
            <div className='p-6 ml-6 mt-4'>
              累計金額開始日
              <CustomButton
                text={<span><span className='text-xl'>2021</span>年<span className='text-xl'>03</span>月<span className='text-xl'>05</span>日</span>}
                // onClick={ }
                // startIcon={ }
                // subIcon={ }
                width={"228px"}
                height={"50px"}
                // isoutlined={ }
                borderradius={"8px"}
                display={"block"}
              // fontsize={ }
              />
            </div>
          </div>
        </Grid>
        :
        <>
          <div></div>
          <div className="max-h-[325px] w-[150px] absolute">
            <div className="h-[50px] border-b-2 border-[white] bg-[#22998D] rounded-t-[10px] text-white">
              <div className="w-fit mx-auto">累計開始日</div>
            </div>
            <div className="bg-[#D4F2EF] rounded-b-[10px]">
              <div className="w-fit mx-auto pb-10 text-[#22998D]"><span className="text-3xl font-bold">2025<br />01/05</span></div>
            </div>
          </div>
        </>
      }
      <Grid container >
        {!matches &&
          <Grid item md={6} xs={12}>
            <div className='px-10 relative'>
              <div className="flex w-[100px] h-[100px] relative ml-12">
                <img src="/images/avatar-large.png" alt="" className='rounded-[50%]' />
                <img src="/images/add_photo.svg" alt="" className='absolute right-[-20px] cursor-pointer' />
              </div>
            </div>
          </Grid>
        }
        {/* Custom Inputs */}
        <Grid item md={6} xs={12}>
          <CustomInput
            imgSrc="/images/my_number_card.svg"
            imgAlt="Email Icon"
            inputPlaceholder="例) smile1234"
            inputLab="ユーザー名"
          />
          <CustomInput
            imgSrc="/images/email.svg"
            imgAlt="Email Icon"
            inputPlaceholder="例) sample@gmail.com"
            inputLab="メールアドレス"
          />
        </Grid>
        {matches &&
          <Grid item md={6} xs={12}>
            <div className='px-10'>
              <div className="flex w-[160px] h-[160px] relative ml-12">
                <img src="/images/avatar-large.png" alt="" className='rounded-[50%]' />
                <img src="/images/add_photo.svg" alt="" className='absolute right-[-20px] cursor-pointer' />
              </div>
            </div>
          </Grid>
        }
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <CustomInput
            imgSrc="/images/password.svg"
            imgAlt="Password Icon"
            inputPlaceholder="8文字以上の英数字"
            inputLab="パスワード"
            extraButton
            btnLabel="変更"
            btnIcon="/images/refresh.svg"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <div className='px-20'>
            <CustomInput
              imgSrc={"/images/mail.svg"}
              // imgAlt={ }
              inputPlaceholder={"例) 123-4567"}
              inputLab={"郵便番号"}
              customWidth={"400px"}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={8}>
          <div className='flex'>
            <CustomInput
              imgSrc="/images/title.svg"
              inputLab="疾患名"
              isGroup
              extraButton
              btnLabel="確定診断年度"
              btnIcon="/images/search.svg"
            />
          </div>
          {counts.map((item, index) =>
            <div>
              <CustomInput
                key={index}
                isGroup
              />

            </div>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <div onClick={() => setCounts([...counts, 1])} className="flex cursor-pointer" style={{ transform: `translate(-20px,${(counts.length + 1) * 70}px)` }}>
              <img src="/images/add.svg" alt="" />
              追加
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container >
        <Grid item xs={12} md={6}>
          <CustomInput
            imgSrc="/images/medical_info.svg"
            inputLab="日常使用している薬剤"
            // customWidth="440px"
            extraButton
            btnLabel="追加"
            btnIcon="/images/add.svg"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex cursor-pointer">
            <img src={"/images/memo.svg"} alt="" />
            メモタグ設定
          </div>
          <div className="flex">
            <div>
              <CustomColorSelect selectedValue="pink" />
              <CustomEventSelect selectedValue="others" />
              <div className="inline-block ml-2">
                <div className="flex gap-2" style={{ marginBottom: !matches ? "10px" : "", marginLeft: !matches ? "40px" : "", marginTop: !matches ? "10px" : "" }}>
                  <MemoButton text="登録" width={"80px"} height={"40px"} fontsize={"16px"} subIcon={"/images/white_create.svg"} padding={"0"} borderradius={"8px"} />
                  <MemoButton text="編集" width={"80px"} height={"40px"} fontsize={"16px"} subIcon={"/images/wrench.svg"} padding={"0"} borderradius={"8px"} isoutlined />
                </div>
              </div>
            </div>
          </div>

        </Grid>
      </Grid>
      {/* Custom Options */}
      <Grid item md={6} xs={12}>
        <div className="flex cursor-pointer">
          <img src={"/images/check-broken.svg"} alt="" />
          情報提供同意
        </div>
        <div className="flex">
          <div className="p-2">
            <CustomOption imgSrc="/images/help.svg" title="リサーチ" widthControl />
          </div>
          <div className="p-2">
            <CustomOption imgSrc="/images/help.svg" title="治験" widthControl />
          </div>
          <div className="p-2">
            <CustomOption imgSrc="/images/help.svg" title="匿名データ提供" widthControl />
          </div>
        </div>
      </Grid>

      {/* Color Select */}
      <Grid item md={6} xs={12}>
        <div className="flex cursor-pointer">
          <img src={"/images/share.svg"} alt="" />
          SNSアカウント
        </div>
        <div style={{ transform: matches ? "translateX(-87px)" : "" }} >
          <SocialInput icon="/images/X.svg" />
          <SocialInput icon="/images/instag.svg" />
          <SocialInput icon="/images/face.svg" />
        </div>
      </Grid>
    </Grid>
  );
}
