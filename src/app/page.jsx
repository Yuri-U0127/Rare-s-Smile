import { Box, Grid, Select, MenuItem } from "@mui/material";
import CustomBox from "../components/ui/CustomBox";
import CustomSelect from "../components/ui/CustomSelect";
import NoteCard from "../components/ui/NoteCard";
import CustomGreenCard from "../components/ui/CustomGreenCard";
import ApexRadialBarChart from "../components/ui/ApexRadialBarChart";
import CutomList from "../components/ui/CustomList.jsx";
import { CssBaseline, GlobalStyles, Typography } from '@mui/material';
import '@fontsource/m-plus-rounded-1c'; // Import the font
import CustomRadialChart from "../components/ui/CustomRadialChart";
import './globals.css'
import dynamic from "next/dynamic";
const PublicHeader = dynamic(() => import('../components/shared/Header'));
const PublicFooter = dynamic(() => import('../components/shared/Footer'))
const PrivateHeader = dynamic(() => import('../components/private/Header'));
const PrivateFooter = dynamic(() => import('../components/private/Footer'));
const VerticalMenu = dynamic(() => import('../components/private/VerticalMenu'));

export default function HomePage() {

  const cardItems = [
    { title: "受給者証", imgSrc: "/images/green_circle_registered.svg", },
    { title: "保険証", imgSrc: "/images/red_circle_failed.svg", },
    { title: "マイナカード", imgSrc: "/images/not_registered.svg", },
    { title: "臨個票", imgSrc: "/images/green_circle_registered.svg", },
  ]

  const options = [
    { value: "zonisamide", label: "ゾニサミド" },
    { value: "Kimria", label: "キムリア" },
  ];

  const messages = [
    { title: "受給者証が登録されました", isRead: false },
    { title: "次回受診日", isRead: true },
    { title: "受給者証が登録されました", isRead: true },
    { title: "期限が切れています", isRead: false },
  ]

  return (
    <>
      <div className='flex is-full min-bs-full flex-auto flex-col max-w-[1440px] mx-auto w-full bg-white'>
        <Grid container sx={{ minHeight: '100vh' }}>
          {/* Vertical Menu */}
          <Grid
            item
            xs={2}
            sx={{
              backgroundImage: 'linear-gradient(135deg, #B7DDD8, #05999E)',
              paddingLeft: 2,
            }}
          >
            <VerticalMenu />
          </Grid>

          {/* Main Content Area */}
          <Grid
            item
            xs={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <Box>
              <PrivateHeader />
            </Box>

            {/* Content */}
            <Box
              sx={{
                flex: 1,
                padding: 3,
                backgroundColor: '#ffffff',
              }}
            >
              <CssBaseline />
              <GlobalStyles
                styles={{
                  body: {
                    fontFamily: "M PLUS Rounded 1c",
                  },
                }}
              />
              <Box sx={{ /*boxShadow: "1px 1px 1px 1px black",  display: "flex" */ }} >
                <Grid container >
                  <Grid item xs={12} md={6} gap={3} sx={{ marginBottom: "30px", }}>
                    <div className="flex items-center">
                      <span className="text-[var(--darkc)] inline-block align-bottom ml-6">こんにちは、<span className=" text-3xl">ユーザー様</span></span>
                      <img src="/images/avatar-large.png" className="!inline ml-5" alt="" width={"100px"} height={"100px"} style={{ borderRadius: "50%" }} />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} gap={3}>
                    <br />
                    <CustomSelect
                      iconSrc={"/images/green_medical_info.png"}
                      options={options}
                      value={"zonisamide"}
                    // onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <CustomBox shadowColor="#ddd" borderRadius="10px">
                      <div className="flex justify-between mb-5 w-[95%] mx-auto">
                        <div className="flex items-center">
                          <img src="/images/bell.svg" alt="" />
                          <span className="pl-2 font-semibold">お知らせ</span>
                        </div>
                        <div><img src="/images/arrow.svg" alt="" className="cursor-pointer" /></div>
                      </div>
                      {
                        messages.map((item, key) => (
                          <CutomList text={item.title} key={key} imgSrc={item.isRead ? "/images/mail_opened.svg" : "/images/email.svg"} />
                        ))
                      }
                    </CustomBox>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <CustomBox shadowColor="#ddd" borderRadius={"10px"}>
                      <div className="flex">
                        <div className="max-h-[325px] w-[150px] ">
                          <div className="h-[50px] border-b-2 border-[white] bg-[#22998D] rounded-t-[10px] text-white">
                            <div className="w-fit mx-auto">累計開始日</div>
                            <div className="w-fit mx-auto"><span className="font-bold">2021.03.05</span></div>
                          </div>
                          <div className="bg-[#D4F2EF] rounded-b-[10px]">
                            <div className="w-fit mx-auto pt-10">累計金額</div>
                            <div className="w-fit mx-auto"><span className="text-sm">(目安)</span></div>
                            <div className="w-fit mx-auto pb-10 text-[#22998D]"><span className="text-3xl">12,460</span>円</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex justify-center">
                            <img src="/images/management_table.svg"></img>
                            <span>上限額</span>
                          </div>
                          <div className="flex">
                            <CustomRadialChart title={"軽症高額"} label={"2 / 3回"} progress={74} />
                            <CustomRadialChart title={"高額長期"} label={"3 / 6回"} progress={50} />
                          </div>
                        </div>

                      </div>
                    </CustomBox>
                  </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                  <Grid item container md={8} xs={12} sx={{ alignItems: "flex-start" }}>
                    <div className="flex">
                      {/* <Grid> */}
                      {cardItems.map((item, key) => (
                        <CustomBox shadowColor={"#D4F2EF"} borderRadius={"20px"} key={key} margin={"10px"}>
                          <div className="font-bold mb-3">{item.title}</div>
                          <div className="mx-auto"><img src={item.imgSrc} alt="" /></div>
                        </CustomBox>
                      ))}
                      {/* </Grid> */}
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12} spacing={2}>
                    <div className="flex justify-between">
                      <div className="flex">
                        <img src="/images/memo.svg" alt="" className="cursor-pointer" />
                        メモ
                      </div>
                      <img src="/images/create.svg" alt="" className="cursor-pointer" />
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
                  </Grid>
                </Grid>
                <br />
                <Grid container rowGap={2} spacing={2}>
                  <Grid item md={3}>
                    <CustomGreenCard imgSrc="/images/green_circle_memo.svg" title="メモ" desc="次の受診日予定などのメモを取っておくと便利です。" />
                  </Grid>
                  <Grid item md={3}>
                    <CustomGreenCard imgSrc="/images/green_circle_folder.svg" title="情報整理" desc="日々の医療情報を電子管理しましょう。" />
                  </Grid>
                  <Grid item md={3}>
                    <CustomGreenCard imgSrc="/images/green_circle_graph.svg" title="上限管理表" desc="紛失時などを想定して、定期的に更新登録しましょう。" />
                  </Grid>
                  <Grid item md={3}>
                    <CustomGreenCard imgSrc="/images/green_circle_search.svg" title="血液等検査結果" desc="通院時の血液検査結果などを保管しておきましょう。" />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* Footer */}
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
                padding: 2,
              }}
            >
              <PrivateFooter />
            </Box>
          </Grid>
        </Grid>
      </div>

    </>
  )
}