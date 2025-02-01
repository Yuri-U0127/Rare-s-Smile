'use client'

import React from 'react';
import '../globals.css'
import dynamic from "next/dynamic";
import { Box, Grid } from '@mui/material';

const PrivateHeader = dynamic(() => import('../../components/private/Header'));
const PrivateFooter = dynamic(() => import('../../components/private/Footer'));
const VerticalMenu = dynamic(() => import('../../components/private/VerticalMenu'));
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from "../../components/shared/MobileHeader.jsx";
import MobileFooter from "../../components/private/MobileFooter.jsx";
import ScrollToTopButton from '../../components/ui/global/ScrollToTopButton'


const layout = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (

    <div className="flex is-full min-bs-full flex-auto flex-col bg-white">
      {!matches && <ScrollToTopButton />}
      <div className='flex'>
        <Grid container sx={{ minHeight: '100vh' }}>
          {/* Vertical Menu */}
          {matches ?
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
            :
            <MobileHeader />
          }

          {/* Main Content Area */}
          <Grid
            item
            xs={matches ? 10 : 12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            {matches &&
              <Box>
                <PrivateHeader />
              </Box>
            }
            {/* Content */}
            <Box
              sx={{
                flex: 1,
                padding: 3,
                backgroundColor: '#ffffff',

              }}
            >
              {/* {matches ? <br style={{ lineHeight: "3" }} /> : ""} */}
              {children}
            </Box>

            {/* Footer */}
            {matches &&
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  padding: 2,
                }}
              >
                <PrivateFooter />
              </Box>
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default layout;