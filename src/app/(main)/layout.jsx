// 'use client'

import '../globals.css'
import dynamic from "next/dynamic";
const PublicHeader = dynamic(() => import('../../components/shared/Header'));
const PublicFooter = dynamic(() => import('../../components/shared/Footer'))
const PrivateHeader = dynamic(() => import('../../components/private/Header'));
const PrivateFooter = dynamic(() => import('../../components/private/Footer'));
const VerticalMenu = dynamic(() => import('../../components/private/VerticalMenu'));
import { Box, Grid } from '@mui/material';
const PortalPage = dynamic(() => import('./portal/page'));

export const metadata = {
  title: 'Next.js App',
  description: 'Modern Next.js application',
}

const token = true;

export default function RootLayout({ children }) {
  return (
    <html lang="jp" /* style={{ fontFamily: notoSansJP.className }} */>
      <body className="flex is-full min-bs-full flex-auto flex-col max-w-[1440px] mx-auto w-full bg-white">
        {!token ? <>
          <PublicHeader />
          <main>
            <PortalPage />
          </main>
          <PublicFooter />
        </>
          : <div className='flex'>
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
                  {children}
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
        }
      </body>
    </html>
  )
}