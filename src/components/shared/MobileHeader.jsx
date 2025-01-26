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
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CustomMobileMenuList from "../ui/CustomMobileMenuList.jsx";
import CustomMobileMenuDivider from "../ui/CustomMobileMenuDivider.jsx";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };


  return (
    <>
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
          <IconButton edge="start">
            <img
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              style={{ width: 40, height: 40 }}
            />
          </IconButton>
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
        <CustomMobileMenuDivider />
        <Divider />
        <List sx={{ width: 250 }}>

          <ListItem button>

            <ListItemText>
              <CustomMobileMenuList title="ホーム" imgSrc='/images/home.svg' link="/" />
              <CustomMobileMenuList title="保険証" imgSrc='/images/Insurance_certificate.svg' link="/" />
              <CustomMobileMenuList title="受給者証" imgSrc='/images/Insurance_certificate.svg' link="/" />
              <CustomMobileMenuList title="マイナカード" imgSrc='/images/my_number_card.svg' link="/" />
              <CustomMobileMenuList title="臨床調査個人票" imgSrc='/images/individual_form.svg' link="/" />
              <CustomMobileMenuDivider />
              <CustomMobileMenuList title="ホーム" imgSrc='/images/home.svg' link="/" />
              <CustomMobileMenuList title="医療情報" imgSrc='/images/medical_info.svg' link="/pricelog" />
              <CustomMobileMenuList title="上限管理表" imgSrc='/images/management_table.svg' link="/" />
              <CustomMobileMenuList title="健康診断" imgSrc='/images/search.svg' link="/" />
              <CustomMobileMenuDivider />
              <CustomMobileMenuList title="プロフィール" imgSrc='/images/recipitence.svg' link="/profile" />
              <CustomMobileMenuList title="データの広場" imgSrc='/images/expansion.svg' link="/data_area" />
              <CustomMobileMenuList title="ヘルプ" imgSrc='/images/help.svg' link="/" />
              <CustomMobileMenuDivider />
              <CustomMobileMenuList title="FAQ" imgSrc='/images/help.svg' link="/faq" />
              <CustomMobileMenuList title="プライバシーポリシー" imgSrc='/images/polish.svg' link="/privacy" />
              <CustomMobileMenuList title="利用規約" imgSrc='/images/book.svg' link="/polish" />


            </ListItemText>
          </ListItem>
        </List>
      </Drawer >
    </>
  );
};

export default MobileHeader;
