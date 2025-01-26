import React from 'react';
import '../globals.css'
import dynamic from "next/dynamic";
import { Box, Grid } from '@mui/material';

const PrivateHeader = dynamic(() => import('../../components/private/Header'));
const PrivateFooter = dynamic(() => import('../../components/private/Footer'));
const VerticalMenu = dynamic(() => import('../../components/private/VerticalMenu'));

const layout = ({ children }) => {
  return (
    <html lang="jp" /* style={{ fontFamily: notoSansJP.className }} */>
      <body className="flex is-full min-bs-full flex-auto flex-col bg-white">
        <div className='flex'>
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
      </body>
    </html>
  );
};

export default layout;