'use client'

import React from 'react';
import dynamic from "next/dynamic";

import { Box, Grid, Typography, Badge } from '@mui/material';
const CustomCard = dynamic(() => import('../../../components/ui/CustomCard1'));
const CustomButton = dynamic(() => import('../../../components/ui/CustomButton'));
const CustomCard2 = dynamic(() => import('../../../components/ui/CustomCard2'));


const PortalPage = () => {

  const carditems = [
    {
      imgSrc: "/images/white_title.svg",
      cardTitle: "デジタル申請",
      cardDesc: "難病医療費助成申請をデジタルで支援するサービスです。過去の申請履歴も閲覧できます。",
      comingSoon: true,
    },
    {
      imgSrc: "/images/white_idcard.svg",
      cardTitle: "受給者証の登録",
      cardDesc: "受給者証や上限管理表、保険証やマイナカードを電子化しておくと、紛失時や災害時にも役立ちます。",
      comingSoon: false,
    },
    {
      imgSrc: "/images/white_folder.svg",
      cardTitle: "医療情報の整理",
      cardDesc: "日々の医療情報を電子管理しましょう。",
      comingSoon: false,
    },
    {
      imgSrc: "/images/white_memo.svg",
      cardTitle: "メモ機能",
      cardDesc: "次の受診日予定や、お医者様から言われたことのメモを取っておくと便利です。",
      comingSoon: false,
    },
    {
      imgSrc: "/images/white_expansion.svg",
      cardTitle: "データの広場",
      cardDesc: "難病に関する統計情報や、割引施設などのお役立ち情報、サービス新機能についての情報もアップデートします。",
      comingSoon: true,
    },
  ]

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#D8F4F4', // Light mint green
          textAlign: 'center',
          padding: '8px 16px',
          borderRadius: '8px 8px 0 0', // Rounded corners at the top
          position: 'relative',
          marginTop: '100px',
          '&::after': {
            content: "''",
            height: "0",
            position: "absolute",
            bottom: "0",
            transform: "translateX(-22px)",
            rotate: "-90deg",
            width: "0",
            left: "50vw",
            border: "medium solid #D8F4F4",
            borderWidth: "15px 15px 15px 0",
            borderColor: "transparent #D8F4F4 transparent transparent"
          }
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#008080', // Teal color for text
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <img src='/images/stars.png' />&nbsp;
          できること、いろいろ
        </Typography>
      </Box>
      <div className='mx-14'>
        <Grid container spacing={8} sx={{ padding: 4 }}>
          {/* Feature 1 */}
          <Grid item xs={12} md={6} gap={6}>
            <CustomCard imgSrc={"/images/illustrations1.png"}
              imgAlt={"Support"} cardTitle={"サポート"} cardDesc={"助成申請の作成支援"} comingSoon={true} />
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={6}>
            <CustomCard imgSrc={"/images/illustration2.png"}
              imgAlt={"Support"} cardTitle={"デジタル管理"} cardDesc={"災害時・紛失時にも安心"} />
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={6}>
            <CustomCard imgSrc={"/images/Online Doctor-amico 1.png"}
              imgAlt={""} cardTitle={"便利な音声機能"} cardDesc={"診察内容を文字起こし"} />
          </Grid>

          {/* Feature 4 */}
          <Grid item xs={12} md={6}>
            <CustomCard imgSrc={"/images/Calculator-amico 1.png"}
              imgAlt={"Support"} cardTitle={"面倒な計算は不要"} cardDesc={"領収書金額の自動計算"} />
          </Grid>
        </Grid >
        <section>
          <div className='flex justify-center'>
            <div className='flex flex-col items-center'>
              <p>デジタル手帳でかんたん & 便利</p>
              <div className="flex">
                <img src="/images/line_1.svg" alt="" />
                <Typography variant="h4" color="var(--darkc)">
                  使い方、いろいろ
                </Typography>
                <img src="/images/line_2.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <Grid container className='justify-center'>
              {carditems.map((item, index) => <Grid item md={4} xs={12}>
                <CustomCard2
                  imgSrc={item.imgSrc}
                  cardTitle={item.cardTitle}
                  cardDesc={item.cardDesc}
                  comingSoon={item.comingSoon}
                  key={index}
                />
              </Grid>
              )}
            </Grid>

          </div>
        </section >
      </div >
      <div className='mx-14'>
        <img src='/images/start.png' className='block mx-auto mt-4 mb-4' />
        < div className='flex justify-items-center gap-6 justify-center mb-24'>
          <CustomButton text="新規登録  ＋" width={"300px"} height={"55px"} fontsize={"20px"} />
          <CustomButton isoutlined text={"ログイン →"} width={"300px"} height={"55px"} fontsize={"20px"} />
        </div>
      </div>
    </>
  );
};

export default PortalPage;
