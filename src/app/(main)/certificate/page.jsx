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
const AppReactDatepicker = dynamic(() => import("../../../components/ui/lib/AppReactDatepicker.jsx"));
const CutomList = dynamic(() => import("../../../components/ui/CustomList.jsx"));
const MemoButton = dynamic(() => import('../../../components/ui/MemoButton'));
const SimpleButton = dynamic(() => import("../../../components/ui/SimpleButton.jsx"));
const CustomPanel = dynamic(() => import('../../../components/ui/CustomPanel'));
const EmptyField = dynamic(() => import('../../../components/ui/EmptyField'));
const CustomButton = dynamic(() => import("../../../components/ui/CustomButton.jsx"));
const PageTitle = dynamic(() => import('../../../components/ui/PageTitle'));

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
  { tabLabel: "受給者証", icon: "/images/recipitence.svg" },
  { tabLabel: "保険証", icon: "/images/insurance_certificate.svg" },
  { tabLabel: "マイナカード", icon: "/images/my_number_card.svg" },
  { tabLabel: "臨床調査個人票", icon: "/images/title.svg" },
]

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <div className='mr-0 mt-5'>
        <div className='flex justify-end gap-[271px]'>
          <PageTitle title={"証明書登録"} />
          <MemoButton text="登録データ一覧" width={"193px"} height={"38px"} fontsize={"16px"} padding={"0"} borderradius={"8px"} />
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
                <Tab label={<div className="flex gap-2 items-center p-0 text-[#aaa]" key={index}>
                  <img src={item.icon} alt="" />
                  {item.tabLabel}
                </div>} {...a11yProps(index)} />
              )}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className='transform -translate-x-[25px] -translate-y-[25px]'>
              <CustomBox shadowColor={"#ddd"} borderRadius={"10px"} customPadding="20px" minWidth="105%" >
                <div className='flex'>
                  <img src="/images/illustration3.png" alt="" />
                  <div className='bubble'>現在、受給者証は登録されていません。<br />災害時や紛失時に慌てないために、登録しておきましょう。
                    <style jsx>{`
                      .bubble {
                        position: relative;
                        background-color:#F1F8F6;
                        width:682px;
                        height:98px;
                        padding-left:32px;
                        padding-top:18px;
                        margin-left:23.2px;
                        text-align: left;
                        box-shadow: 1px 1px 5px 0px #ddd;
                        border-radius: 10px;
                      }
                      .bubble::before {
                        content: '';
                        height: 0;
                        position: absolute;
                        top: 37%;
                        left: -1.5%;
                        width: 0;
                        z-index: 1;
                        border: medium solid white;
                        border-width: 10px 10px 10px 0;
                        border-color: transparent #F1F8F6 transparent transparent;
                      }
                    `}</style>
                  </div>
                </div>
                <Grid container >
                  <Grid item xs={12} md={4.5}>
                    <CustomPanel title={"表面"}>
                      <EmptyField />
                    </CustomPanel>
                  </Grid>
                  <Grid item xs={12} md={4.5}>
                    <CustomPanel title={"表面"}>
                      <EmptyField />
                    </CustomPanel>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className='mt-10'>
                      <div className="flex gap-2 items-center p-0 text-[#aaa] justify-end mr-6">
                        <img src="/images/pin.svg" alt="" />
                        ホームに表示する
                        <CustomSwitch />
                      </div>
                      <div className="flex justify-between mt-5">
                        <div className="flex">
                          <img src="/images/memo.svg" alt="" className="cursor-pointer" />
                          メモ
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mt-5">
                          <NoteCard
                            // icon={iconSrc}
                            title="次回受診日"
                            content="次回8月12日 よつばクリニックで佐藤先生に診察"
                            color
                          />
                          <br />
                          <NoteCard
                            // icon={iconSrc}
                            title="受診時報告事項"
                            content="薬があまり効かないので次回報告すること。"
                          />
                        </div>
                        <div className="ml-2">
                          <img src="/images/next.svg" alt="" className="cursor-pointer pt-5" width={30} height={30} />
                        </div>
                      </div>
                      <CustomButton
                        text="登録 +"
                        width={"239px"}
                        height={"64px"}
                        borderradius={"150px"}
                        display={"block"}
                        sx={{ marginInline: "5px 0px", marginTop: "50px", marginButtom: "40px" }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </CustomBox>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            123
          </CustomTabPanel>
        </Box>
      </div >
    </>
  );
}