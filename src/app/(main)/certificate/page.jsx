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
import CustomBreadCrumbs from "../../../components/ui/CustomBreadCrumbs.jsx";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomCarousel from "../../../components/ui/CustomCarousel.jsx";

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

const pctabs = [
  { tabLabel: "受給者証", icon: "/images/recipitence.svg" },
  { tabLabel: "保険証", icon: "/images/insurance_certificate.svg" },
  { tabLabel: "マイナカード", icon: "/images/my_number_card.svg" },
  { tabLabel: "臨床調査個人票", icon: "/images/title.svg" },
]
const sptabs = [
  { tabLabel: "受給者証", icon: "/images/recipitence.svg" },
  { tabLabel: "保険証", icon: "/images/insurance_certificate.svg" },
  { tabLabel: "マイナ", icon: "/images/my_number_card.svg" },
  { tabLabel: "個人票", icon: "/images/title.svg" },
]

export default function BasicTabs() {

  const [carouselIndex, setCarouselIndex] = React.useState(0);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));


  const router = usePathname();
  let tempValue
  console.log(router.search("ensurance"))

  if (router.search("ensurance") > 0) { useRouter().push("/certificate"); tempValue = 1; }
  // else if (router.search("recipient") > 0) tempValue = 2;
  // else if (router.search("recipient") > 0) tempValue = 3;

  console.log(tempValue)
  const [value, setValue] = React.useState(0);

  console.log(router)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let currentLabel = "受給者証登録"
  switch (value) {
    case 0:
      currentLabel = "受給者証登録"
      break;
    case 1:
      currentLabel = "保険証"
      break;
    case 2:
      currentLabel = "マイナカード"
      break;
    case 3:
      currentLabel = "臨床調査個人票"
      break;
    default:
      currentLabel = "受給者証登録"
      break;
  }

  return (
    <>
      {matches && <CustomBreadCrumbs hierarchy={2} label1={"証明書"} url={""} label={currentLabel} />}
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
                width: {
                  sm: '30%',
                  md: '100%'
                },
                // position: { sm: "absolute", md: 'inherit' },
                // left: { sm: '50%', md: '' },
                // bottom: { sm: '', md: '4px' },
                // transform: { sm: 'translateX(50%)', md: 'translateX(0)' },1
              },
            }
            } aria-label="basic tabs example">
              {matches ? pctabs.map((item, index) => (
                <Tab key={index} label={<div className="flex gap-2 items-center p-0 text-[#aaa]">
                  <img src={item.icon} alt="" />
                  {item.tabLabel}
                </div>} {...a11yProps(index)} />))
                :
                (sptabs.map((item, index) =>
                  <Tab
                    key={index}
                    label={
                      <div className="flex justify-center flex-col items-center p-0 text-[#aaa]">
                        <img src={item.icon} alt="" />
                        {item.tabLabel}
                      </div>}
                    {...a11yProps(index)}
                  />
                ))}
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
                  {matches ?
                    <><Grid item xs={12} md={4.5}>
                      <CustomPanel title={"表面"}>
                        <EmptyField />
                      </CustomPanel>
                    </Grid>
                      <Grid item xs={12} md={4.5}>
                        <CustomPanel title={"表面"}>
                          <EmptyField />
                        </CustomPanel>
                      </Grid>
                    </>
                    :
                    <CustomCarousel number={3} carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
                  }
                  <Grid item xs={12} md={3}>
                    <div className="block md:hidden mt-5">
                      <CustomButton
                        text="登録 +"
                        width={"239px"}
                        height={"64px"}
                        borderradius={"150px"}
                        display={"block"}
                        sx={{ marginInline: "auto", marginBottom: "20px" }}
                      />
                    </div>
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
                        {matches &&
                          <div className="ml-2">
                            <img src="/images/next.svg" alt="" className="cursor-pointer pt-5" width={30} height={30} />
                          </div>
                        }
                      </div>
                      <div className="hidden md:block">
                        <CustomButton
                          text="登録 +"
                          width={"239px"}
                          height={"64px"}
                          borderradius={"150px"}
                          display={"block"}
                          sx={{ marginInline: { md: "5px 0px", sm: "auto" }, marginTop: "50px", marginButtom: "40px" }}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </CustomBox>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            1
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            2
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            3
          </CustomTabPanel>
        </Box>
      </div >
    </>
  );
}