import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CustomMobileMenuList from "../ui/CustomMobileMenuList.jsx";
import CustomMobileMenuDivider from "../ui/CustomMobileMenuDivider.jsx";
import Link from "next/link.js";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };


  return (
    <div className="absolute top-0 w-full">

      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #e0f7fa, #e3f2fd)",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href='/'>
            <IconButton edge="start">
              <img
                src="/images/logo_small.svg"
                alt="Logo"
                style={{ width: 40, height: 40 }}
              />
            </IconButton>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: 16,
              padding: "4px 8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              flexGrow: 1,
              margin: "0 16px",
            }}
          >
            <SearchIcon sx={{ color: "#9e9e9e" }} />
            <InputBase
              placeholder="Search..."
              sx={{ marginLeft: 1, flex: 1 }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <IconButton edge="end" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {/* Drawer Header */}
        <List sx={{ width: 250 }}>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="ホーム" imgSrc='/images/home.svg' link="/" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="保険証" imgSrc='/images/Insurance_certificate.svg' link="/certificate/ensurance" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="受給者証" imgSrc='/images/Insurance_certificate.svg' link="/certificate/recipient" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="マイナカード" imgSrc='/images/my_number_card.svg' link="/certificate/mynum" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="臨床調査個人票" imgSrc='/images/individual_form.svg' link="/certificate/individual" />
            </ListItemText>
          </ListItem>
          <CustomMobileMenuDivider />
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="メモ" imgSrc='/images/memo.svg' link="/memo" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="医療情報" imgSrc='/images/medical_info.svg' link="/pricelog/information" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="上限管理表" imgSrc='/images/management_table.svg' link="/management_table" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="健康診断" imgSrc='/images/search.svg' link="/pricelog/check" />
            </ListItemText>
          </ListItem>
          <CustomMobileMenuDivider />
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="プロフィール" imgSrc='/images/recipitence.svg' link="/profile" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="データの広場" imgSrc='/images/expansion.svg' link="/data_area" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="ヘルプ" imgSrc='/images/help.svg' link="/help" />
            </ListItemText>
          </ListItem>
          <CustomMobileMenuDivider />
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="FAQ" imgSrc='/images/help.svg' link="/faq" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="プライバシーポリシー" imgSrc='/images/polish.svg' link="/privacy" />
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText>
              <CustomMobileMenuList title="利用規約" imgSrc='/images/book.svg' link="/polish" />
            </ListItemText>
          </ListItem>
        </List >
      </Drawer >
    </div>
  );
};

export default MobileHeader;
