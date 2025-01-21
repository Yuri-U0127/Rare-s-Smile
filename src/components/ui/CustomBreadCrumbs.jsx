'use client'

import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Typography } from "@mui/material";

const CustomBreadCrumbs = ({ label, url, hierarchy }) => {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <div className="flex gap-2 items-center p-0">
        <img src="/images/home.svg" alt="" />
        <span>ホーム</span>
      </div>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={url}
    >
      {label}
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Breadcrumb
    </Typography>,
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link underline="hover" key="1" color="inherit" href="/">
        <div className="flex gap-2 items-center p-0">
          <img src="/images/home.svg" alt="" />
          <span>ホーム</span>
        </div>
      </Link>
      {hierarchy == 2 &&
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href={url}
        >
          {label}
        </Link>}
      <Typography key="3" sx={{ color: 'text.primary' }}>
        {label}
      </Typography>,
    </Breadcrumbs>
  );
};

export default CustomBreadCrumbs;