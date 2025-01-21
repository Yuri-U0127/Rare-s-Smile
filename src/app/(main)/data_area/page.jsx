'use client'

import React from "react";
import dynamic from "next/dynamic";
const CustomBox = dynamic(() => import("../../../components/ui/CustomBox"));
import { Typography } from "@mui/material";
const ReactApexChart = dynamic(() => import('react-apexcharts'));
import { Grid } from "@mui/joy";
import { LineChart } from '@mui/x-charts/LineChart';
const CustomBreadCrumbs = dynamic(() => import("../../../components/ui/CustomBreadCrumbs"));
const ApexRadialBarChart = dynamic(() => import("../../../components/ui/ApexRadialBarChart.jsx"));
const CustomCard3 = dynamic(() => import("../../../components/ui/CustomCard3"));
const CustomRadialChart = dynamic(() => import("../../../components/ui/CustomRadialChart"));


export default function DataAreaPage() {

  return (
    <>
      <CustomBreadCrumbs hierarchy={1} label={"データの広場"} url={"/data_area"} />
      <div className='mx-auto'>
        <Typography variant="h5" component="h3" sx={{ color: "var(--darkc)", display: "inline", marginTop: "10px" }}>データの広場</Typography>
        <p className="inline ml-3">このサービスに登録されている患者様の情報を統計情報として表示します。</p>
      </div>
      {/* <CustomBox shadowColor={"#ddd"} borderRadius={"10px"} customPadding="10px"> */}
      <img src="/images/chartbox.png" alt="" />
      {/* </CustomBox> */}
      <Grid container columnGap={3}>
        <Grid item xs={12} md={5} >
          <CustomBox shadowColor={"#ddd"} borderRadius={"10px"} customPadding="10px auto 0px auto">
            <div className="flex justify-center mt-3">
              <span>\</span>
              <span className="text-lg">Follow us!</span>
              <div className="flex justify-between">
                <img src="/images/x.png" alt="" className="mx-2" />
                <img src="/images/note.png" alt="" className="mx-2" />
              </div>
              <span className="text-lg">最新情報をチェック</span>
              <span>/</span>
            </div>
            <div className="flex ml-2">
              <img src="/images/x_feed.png" alt="" className="mx-2" />
              <img src="/images/note_feed.png" alt="" />
            </div>
            <div className="pt-3 pb-3" style={{ backgroundImage: "linear-gradient(180deg, #ffffff, #666)" }}>
              <span className="text-[white] font-bold">サービス活用方法、役立つTips、魅力的な新機能</span></div>
          </CustomBox>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Grid container> */}
          <CustomBox shadowColor={"#ddd"} borderRadius={"10px"} customPadding="10px">
            <div className="flex content-center pb-3">
              <img src="/images/yellow_plus.png" alt="" />
              <span className="ml-2">難病受給者証の<span className="font-bold font-xl">割引</span>でもっと楽しもう！</span>
            </div>
            <div className="flex overflow-scroll mb-1" style={{
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none', // For Internet Explorer and Edge
            }}>
              <CustomCard3 imgSrc={"/images/park.png"} cardWidth={"40%"} cardTitle={"那須ハイランドパーク"} cardDesc={"受給者証の提示で料金が半額になります。"} />
              <CustomCard3 imgSrc={"/images/museum.png"} cardWidth={"40%"} cardTitle={"足立美術館"} cardDesc={"受給者証の提示で料金が半額になります。"} />
              <CustomCard3 imgSrc={"/images/department.png"} cardWidth={"40%"} cardTitle={"横浜ランドマークタワー"} cardDesc={"受給者証の提示で料金が半額になります。"} />
            </div>
          </CustomBox>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </>
  )
}