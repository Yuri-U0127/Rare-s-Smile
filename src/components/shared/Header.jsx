'use client'

// React Imports
import { useRef, useState, useEffect } from 'react'

import Hamburger from '../ui/header/Hamburger'
import CustomButton from '../ui/CustomButton'
import FaqBtn from '../ui/FaqButton'
import Logo from '../ui/Logo'
import Link from 'next/link'

import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import Divider from '@mui/material/Divider'
import MenuCategory from '../ui/header/MenuCategory';
import CustomMenuItem from '../ui/header/CustomMenuItem';


export default function PublicHeader() {

  const [open, setOpen] = useState(false)

  // Refs

  const anchorRef = useRef(null)
  const currentUrl = useRef('')

  useEffect(() => {
    currentUrl.current = window.location.href;
  }, []);

  // Hooks
  // const router = useRouter()
  // const { settings } = useSettings()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event, url) => {
    if (url) {
      router.push(url)
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <div className="relative h-[549px] bg-[url('/images/banner.png')] bg-no-repeat bg-cover bg-center" >
        <div className="flex justify-between w-[100%] pl-[98px] pr-[91px] mt-[40px]">
          <Link href='/'>
            <Logo />
          </Link>
          <div className="flex items-center mr-0">
            <FaqBtn />
            <div className="mx-[32px]">
              <CustomButton text="新規登録  ＋" />
            </div>
            <div className="mr-[64px]">
              <CustomButton isoutlined text={"ログイン →"} />
            </div>
            <Hamburger
              onClick={handleDropdownOpen}
            >
              <Popper
                open={open}
                transition
                disablePortal
                placement='bottom-end'
                anchorEl={anchorRef.current}
                className='!absolute translate-x-[-320px] translate-y-[30px] w-[352px] h-[754px] z-10'
              >
                {({ TransitionProps, placement }) => (
                  <Fade
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
                    }}
                  >
                    <Paper /* className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'} */>
                      <ClickAwayListener onClickAway={e => handleDropdownClose(e)}>
                        <MenuList>
                          <div className='flex justify-between'>
                            <div className='h-[68px] pt-[24px] pl-[32px] '>
                              < img src="/images/logo_small.svg" alt="logo" />
                            </div>
                            <div className='flex items-center mr-[22px]'>
                              < img src="/images/close.svg" alt="logo" onClick={e => handleDropdownClose(e)} />
                            </div >
                          </div>
                          <Divider className='mlb-1' />
                          <MenuCategory title={"証明書"} />
                          <CustomMenuItem title={"受給者証"} imgSrc={'/images/Insurance_certificate.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"保険証"} imgSrc={'/images/Insurance_certificate.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"マイナカード"} imgSrc={'/images/my_number_card.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"臨床調査個人票"} imgSrc={'/images/individual_form.svg'} handleDropdownClose={handleDropdownClose} />
                          <Divider className='mlb-1' />
                          <MenuCategory title={"記録"} />
                          <CustomMenuItem title={"医療情報"} imgSrc={'/images/medical_info.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"上限管理表"} imgSrc={'/images/management_table.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"健康診断"} imgSrc={'/images/search.svg'} handleDropdownClose={handleDropdownClose} />
                          <Divider className='mlb-1' />
                          <MenuCategory title={"設定"} />
                          <CustomMenuItem title={"プロフィール"} imgSrc={'/images/recipitence.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"ヘルプ"} imgSrc={'/images/help.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"お問い合わせ"} imgSrc={'/images/email.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"ログアウト"} imgSrc={'/images/logout.svg'} handleDropdownClose={handleDropdownClose} />
                          <CustomMenuItem title={"退会"} imgSrc={'/images/account delete.svg'} handleDropdownClose={handleDropdownClose} />

                          <div className='flex items-center plb-2 pli-4'>
                          </div>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Hamburger>
          </div>
        </div>
        {currentUrl.current.search("portal") > 1 ?
          < div className='flex absolute bottom-[-20px] left-[15%]'>
            <div className="mx-[16px]">
              <CustomButton text="新規登録  ＋" width={"200px"} height={"55px"} fontsize={"20px"} />
            </div>
            <div>
              <CustomButton isoutlined text={"ログイン →"} width={"200px"} height={"55px"} fontsize={"20px"} />
            </div>
          </div>
          :
          <p></p>
        }
      </div >
    </>
  )
}