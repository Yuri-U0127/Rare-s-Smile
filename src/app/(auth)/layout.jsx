import React from 'react';
import '../globals.css'
import dynamic from "next/dynamic";
const PublicHeader = dynamic(() => import('../../components/shared/Header'));
const PublicFooter = dynamic(() => import('../../components/shared/Footer'))

const layout = ({ children }) => {
  return (
    <>
      <PublicHeader />
      {children}
      <PublicFooter />
    </>
  );
};

export default layout;