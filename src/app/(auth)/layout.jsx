'use client'
import React from 'react';
import '../globals.css'
import dynamic from "next/dynamic";
const PublicHeader = dynamic(() => import('../../components/shared/Header'));
const PublicFooter = dynamic(() => import('../../components/shared/Footer'))
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollToTopButton from '@/src/components/ui/global/ScrollToTopButton';

const layout = ({ children }) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <PublicHeader />
      {!matches && <ScrollToTopButton />}
      {children}
      <PublicFooter />
    </>
  );
};

export default layout;