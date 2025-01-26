// 'use client'

import './globals.css'
import dynamic from "next/dynamic";
const PublicHeader = dynamic(() => import('../components/shared/Header'));
const PublicFooter = dynamic(() => import('../components/shared/Footer'))
const PrivateHeader = dynamic(() => import('../components/private/Header'));
const PrivateFooter = dynamic(() => import('../components/private/Footer'));
const VerticalMenu = dynamic(() => import('../components/private/VerticalMenu'));
import { Box, Grid } from '@mui/material';
const PortalPage = dynamic(() => import('./(auth)/portal/page'));

export const metadata = {
  title: 'Next.js App',
  description: 'Modern Next.js application',
}

const token = true;

export default function RootLayout({ children }) {
  return (
    <html lang="jp" /* style={{ fontFamily: notoSansJP.className }} */>
      <body className="flex is-full min-bs-full flex-auto flex-col w-full bg-white">
        {children}
      </body>
    </html>
  )
}