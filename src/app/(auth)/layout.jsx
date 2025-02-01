'use client'
import React from 'react';
import '../globals.css'
import dynamic from "next/dynamic";
const PublicHeader = dynamic(() => import('../../components/shared/Header'));
const PublicFooter = dynamic(() => import('../../components/shared/Footer'))
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollToTopButton from '../../components/ui/global/ScrollToTopButton';
import MobileHeader from '../../components/shared/MobileHeader';
import MobilePublicFooter from '../../components/shared/MobilePublicFooter';

const layout = ({ children }) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {matches ? <PublicHeader /> : <MobileHeader />}
      {!matches && <ScrollToTopButton />}
      {children}
      {matches ? <PublicFooter /> : <MobilePublicFooter />}
    </>
  );
};

export default layout;