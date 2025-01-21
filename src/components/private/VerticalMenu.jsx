'use client'

import React from "react";
import Link from "next/link";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname } from 'next/navigation';

const navItems = [
  { label: "ホーム", href: "/", whiteIcon: <img src="/images/white_home.svg" />, greenIcon: <img src="/images/green_home.svg" /> },
  { label: "プロフィール", href: "/profile", whiteIcon: <img src="/images/white_profile.svg" />, greenIcon: <img src="/images/green_profile.svg" /> },
  { label: "証明書", href: "/certificate", whiteIcon: <img src="/images/white_idcard.svg" />, greenIcon: <img src="/images/green_idcard.svg" /> },
  { label: "メモ", href: "/memo", whiteIcon: <img src="/images/white_memo.svg" />, greenIcon: <img src="/images/green_memo.svg" /> },
  { label: "医療費記録", href: "/pricelog", whiteIcon: <img src="/images/white_calc.svg" />, greenIcon: <img src="/images/green_calc.svg" /> },
  { label: "データの広場", href: "/data_area", whiteIcon: <img src="/images/white_expansion.svg" />, greenIcon: <img src="/images/green_expansion.svg" /> },
  { label: "FAQ", href: "/faq", whiteIcon: <img src="/images/white_help.svg" />, greenIcon: <img src="/images/green_Help.svg" /> },
  { label: "プライバシー", href: "/privacy", whiteIcon: <img src="/images/white_polish.svg" />, greenIcon: <img src="/images/green_polish.svg" /> },
  { label: "利用規約", href: "/polish", whiteIcon: <img src="/images/white_book.svg" />, greenIcon: <img src="/images/green_book.svg" /> },
];

const VerticalMenu = () => {
  const router = usePathname();
  console.log(router)

  return (
    <>
      <div className='flex items-center min-bs-[24px] mt-10'>
        <img src='/images/smile.svg' />
      </div>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}

              sx={{

                color: router === item.href ? "var(--darkc)" : "#ffffff",
                backgroundColor: router === item.href ? "#ffffff" : "transparent",
                borderStartStartRadius: router === item.href ? "30px" : "none",
                borderEndStartRadius: router === item.href ? "30px" : "none",
                "&::after": router === item.href ? {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '20px',
                  width: "20px",
                  backgroundImage: 'url("/images/triangle.svg")',
                  backgroundSize: "100% 100%",
                  top: "-20px",
                  right: 0,
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  // transform: "translateY(-20px)"
                }
                  :
                  {},
                "&::before": router === item.href ? {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '20px',
                  width: "20px",
                  backgroundImage: 'url("/images/triangle.svg")',
                  backgroundSize: "100% 100%",
                  bottom: "-20px",
                  right: 0,
                  transform: "rotate(-90deg)"
                }
                  :
                  {},
                "&:hover": router === item.href ? {
                  backgroundColor: "#FFFFFF"
                } : { backgroundColor: "inherit" }

              }}
            >
              <ListItemIcon>
                {router === item.href ? item.greenIcon : item.whiteIcon}
              </ListItemIcon>
              <ListItemText className="m-plus-rounded-1c-regular" primary={<span className="text-[20px]" > {item.label}</span>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default VerticalMenu;
