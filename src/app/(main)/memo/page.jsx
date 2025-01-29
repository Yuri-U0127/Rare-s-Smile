'use client'
import * as React from 'react';
import dynamic from "next/dynamic";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography, Input } from '@mui/material';
import { Grid } from '@mui/joy';
const CustomBox = dynamic(() => import('../../../components/ui/CustomBox'));
const CustomSwitch = dynamic(() => import('../../../components/ui/CustomSwitch'));
const NoteCard = dynamic(() => import("../../../components/ui/NoteCard.jsx"));
const CalendarSelector = dynamic(() => import("../../../components/ui/DatePicker.jsx"));
const CustomButton = dynamic(() => import("../../../components/ui/CustomButton.jsx"));
const AppReactDatepicker = dynamic(() => import("../../../components/ui/lib/AppReactDatepicker.jsx"));
const CutomList = dynamic(() => import("../../../components/ui/CustomList.jsx"));
const MemoButton = dynamic(() => import('../../../components/ui/MemoButton'));
const SimpleButton = dynamic(() => import("../../../components/ui/SimpleButton.jsx"));
const PageTitle = dynamic(() => import('../../../components/ui/PageTitle'));
import { useRouter, useSearchParams } from "next/navigation";
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

const recentMemo = [
  { no: 1, date: "2024.06.08" },
  { no: 2, date: "2024.05.18" },
  { no: 3, date: "2024.04.27" },
  { no: 4, date: "2024.12.09" },
]

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // router.push(!newValue ? "memo/textmemo" : "memo/voicememo")
  };

  return (
    <>
      <PageTitle title={"メモ"} />
      <div className='mt-5'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} role="navigation" sx={{
              '& .MuiTabs-indicator': {
                height: '4px',
                backgroundColor: 'var(--darkc)',
              },
            }} aria-label="basic tabs example">
              <Tab label={<div className="" sx={{ color: "var(--darkc)" }}>
                <div className="flex gap-2 items-center p-0 text-[#aaa]">
                  <img src="/images/memo.svg" alt="" />
                  メモ帳
                </div>
              </div>} {...a11yProps(0)} />
              <Tab label={<div className="flex gap-2 items-center p-0 text-[#aaa]">
                <img src="/images/microphone.svg" alt="" />
                ボイスメモ
              </div>} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className='transform -translate-x-[25px] -translate-y-[25px]'>
              <CustomBox shadowColor={"#ddd"} borderRadius={"10px"} customPadding="20px" minWidth="108%" >
                <div className="flex gap-2 items-center p-0 text-[#aaa]">
                  <img src="/images/pin.svg" alt="" />
                  ホームに常に表示する
                  <CustomSwitch />
                </div>
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <div className='flex justify-end'>
                      <div className="flex">
                        <img src="/images/create.svg" alt="" />
                        <img src="/images/edit.svg" alt="" />
                        <img src="/images/trash.svg" alt="" />
                      </div>
                    </div>
                    <NoteCard
                      borderWidth="10px"
                      minHeight={"300px"}
                      title="次回受診日"
                      content="次回8月12日 よつばクリニックで佐藤先生に診察"
                      isEditable
                      color
                    />
                    <div className='flex justify-end'>
                      <div>32/2000 字</div>
                    </div>
                    <div className="mx-auto">
                      <CustomButton center width="90%" text="保存" subIcon={<img src="/images/white_save.svg" alt="" />} />
                    </div>
                  </Grid>
                  <Grid item container md={6} xs={12}>
                    <div className='mx-[20px]'>
                      <div className="flex gap-2 items-center">
                        <div>登録日</div>

                        <CalendarSelector />
                      </div>
                      <div className='w-[100%]'>
                        {
                          recentMemo.map((item, key) => (
                            <CutomList text={item.date} key={key} imgSrc={"/images/arrow.svg"} />
                          ))
                        }
                      </div>
                      <div className='ml-5 mt-3'>
                        <div className='m-3'>
                          <SimpleButton text={"修正"} width={"200px"} display="block" subIcon="/images/green_edit.svg" />
                        </div>
                        <div className='m-3'>
                          <SimpleButton text={"削除"} width={"200px"} display="block" subIcon="/images/white_trash.svg" isDelete />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </CustomBox>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className='transform -translate-x-[25px] -translate-y-[25px]'>
              <CustomBox shadowColor={"#ddd"} borderRadius={"10px"} customPadding="20px" minWidth="108%" >
                <div className='text-left'>
                  <div className="flex gap-2 items-center p-0 text-[#aaa]">
                    <img src="/images/pin.svg" alt="" />
                    ホームに常に表示する
                    <CustomSwitch />
                  </div>
                  <div className='mt-2'>1500文字程度の要約された文章が表示されます</div>
                </div>
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <div className='flex justify-end'>
                      <div className="flex">
                        <img src="/images/create.svg" alt="" />
                        <img src="/images/edit.svg" alt="" />
                        <img src="/images/trash.svg" alt="" />
                      </div>
                    </div>
                    <NoteCard
                      borderWidth="10px"
                      minHeight={"300px"}
                      title="次回受診日"
                      content="次回8月12日 よつばクリニックで佐藤先生に診察"
                      isEditable
                      color
                      placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                      button
                    />
                    <div className='flex justify-end'>
                      <div>32/2000 字</div>
                    </div>
                    <div className="mx-auto">
                      <CustomButton center width="90%" text="保存" subIcon={<img src="/images/white_save.svg" alt="" />} />
                    </div>
                  </Grid>
                  <Grid item container md={6} xs={12}>
                    <div className='mx-[20px]'>
                      <div className="flex gap-2 items-center">
                        <div>登録日</div>

                        <CalendarSelector />
                      </div>
                      <div className='w-[100%]'>
                        {
                          recentMemo.map((item, key) => (
                            <CutomList text={item.date} key={key} imgSrc={"/images/arrow.svg"} />
                          ))
                        }
                      </div>
                      <div className='ml-5 mt-3'>
                        <div className='m-3'>
                          <SimpleButton text={"修正"} width={"200px"} display="block" subIcon="/images/green_edit.svg" />
                        </div>
                        <div className='m-3'>
                          <SimpleButton text={"削除"} width={"200px"} display="block" subIcon="/images/white_trash.svg" isDelete />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </CustomBox>
            </div>
          </CustomTabPanel>
        </Box>
      </div >
    </>
  );
}