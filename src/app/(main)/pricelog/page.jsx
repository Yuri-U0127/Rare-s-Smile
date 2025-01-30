'use client'

import * as React from 'react';
import dynamic from "next/dynamic";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography, Input } from '@mui/material';
import { Grid } from '@mui/joy';
const PriceLogButton = dynamic(() => import("../../../components/ui/PriceLogButton"));
const PageTitle = dynamic(() => import("../../../components/ui/PageTitle"));
const CustomBox = dynamic(() => import('../../../components/ui/CustomBox'));
const CustomSwitch = dynamic(() => import('../../../components/ui/CustomSwitch'));
const NoteCard = dynamic(() => import("../../../components/ui/NoteCard.jsx"));
const CalendarSelector = dynamic(() => import("../../../components/ui/DatePicker.jsx"));
const AppReactDatepicker = dynamic(() => import("../../../components/ui/lib/AppReactDatepicker.jsx"));
const CutomList = dynamic(() => import("../../../components/ui/CustomList.jsx"));
const MemoButton = dynamic(() => import('../../../components/ui/MemoButton'));
const SimpleButton = dynamic(() => import("../../../components/ui/SimpleButton.jsx"));
const CustomPanel = dynamic(() => import('../../../components/ui/CustomPanel'));
const EmptyField = dynamic(() => import('../../../components/ui/EmptyField'));
const CustomButton = dynamic(() => import("../../../components/ui/CustomButton.jsx"));
const ModalButton = dynamic(() => import("../../../components/ui/ModalButton"));
import CustomBreadCrumbs from "../../../components/ui/CustomBreadCrumbs.jsx";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  // const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
  { tabLabel: "領収書", icon: "/images/calculator.svg" },
  { tabLabel: "処方箋", icon: "/images/medical_info.svg" },
  { tabLabel: "上限管理表", icon: "/images/management_table.svg" },
  { tabLabel: "健康診断結果", icon: "/images/search.svg" },
  { tabLabel: "血液検査", icon: "/images/aidkit.svg" },
]

export default function BasicTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let currentLabel = "領収書"
  switch (value) {
    case 0:
      currentLabel = "領収書"
      break;
    case 1:
      currentLabel = "処方箋"
      break;
    case 2:
      currentLabel = "上限管理表"
      break;
    case 3:
      currentLabel = "健康診断結果"
      break;
    case 4:
      currentLabel = "血液検査"
      break;
    default:
      currentLabel = "領収書"
      break;
  }


  return (
    <>
      <CustomBreadCrumbs hierarchy={2} label1={"医療費記録"} url={""} label={currentLabel} />
      <div className='mr-0 mt-5'>
        <div className='flex justify-end gap-[271px]'>
          <PageTitle title={"医療費記録"} />
          <PriceLogButton />
        </div>
      </div>
      <div className='mt-5'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

            <Tabs value={value} onChange={handleChange} role="navigation" sx={{
              '& .MuiTabs-indicator': {
                height: '4px',
                backgroundColor: 'var(--darkc)',
              },
            }} aria-label="basic tabs example">
              {tabs.map((item, index) =>
                <Tab key={index} label={<div className="flex gap-2 items-center p-0 text-[#aaa]">
                  <img src={item.icon} alt="" />
                  {item.tabLabel}
                </div>} {...a11yProps(index)} />
              )}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className='transform -translate-x-[25px] -translate-y-[25px]'>
              <CustomBox shadowColor={"#ddd"} borderRadius={"10px"} customPadding="20px" minWidth="108%" >
                <div className="px-20">
                  <Grid container >
                    <Grid item xs={12} md={5.5}>
                      <CustomPanel title={"領収書"}>
                        <EmptyField />
                      </CustomPanel>
                      <div className="">
                        <CustomButton
                          text="登録 +"
                          width={"239px"}
                          height={"64px"}
                          borderradius={"150px"}
                          display={"block"}
                          sx={{ marginInline: "auto", marginTop: "50px", marginButtom: "40px" }}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6.5}>
                      <div className="relative">
                        <img src="/images/illustration4.png" alt="" className="absolute z-10" />
                        <div style={{ backgroundColor: "#F1F8F6", transform: "translate(31px, 10px)" }} className="w-[418px] h-[173px] pt-[18px] pr-[14px] pb-[45px] pl-[142px] rounded-md"><span className="text-[var(--darkc)] text-lg">
                          日々の病院や薬局での領収書を管理しておきましょう・難病医療申請時の医療費の確認にも利用できます。
                        </span>
                        </div>
                        <div className="mt-6 ml-8">
                          <div className="flex justify-between items-center p-0 text-[#aaa] mr-6">
                            <div>
                              メモ
                            </div>
                            <div className="flex mr-[55px]">
                              <img src="/images/pin.svg" alt="" />
                              ホームに表示する
                              <CustomSwitch />
                            </div>
                          </div>

                          <div className="flex">
                            <div className="mt-5">
                              <NoteCard
                                width={"420px"}
                                title="次回受診日"
                                content=""
                                color
                                minHeight={"116px"}
                              />
                            </div>
                          </div>
                          <div className='mt-3'>
                            <div className='mt-5'>
                              <SimpleButton text={"修正"} width={"200px"} display="block" subIcon="/images/green_edit.svg" />
                            </div>
                            <div className='mt-5'>
                              <SimpleButton text={"削除"} width={"200px"} display="block" subIcon="/images/white_trash.svg" isDelete />
                            </div>
                          </div>
                        </div>

                      </div>
                    </Grid>
                  </Grid>
                </div>
              </CustomBox>
            </div>
          </CustomTabPanel >
        </Box >
      </div >

    </>
  )
}