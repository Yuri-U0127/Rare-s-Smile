'use client'

import { Box, Typography, Link } from '@mui/material';

const PublicFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#D4F2EF',
        padding: '10px 50px',
      }}
    >
      <div className='flex flex-col  items-center'>
        {/* Left Section */}
        <div className='mx-auto'>
          <Box display="flex" justifyContent="center" gap={2} mb={{ xs: 2, md: 3 }}>
            <Link href="/faq" underline="hover" color="inherit">
              FAQ
            </Link>
            <Typography sx={{ marginLeft: 2, marginRight: 2 }}>|</Typography>
            <Link href="/privacy-policy" underline="hover" color="inherit">
              プライバシーポリシー
            </Link>
            <Typography >|</Typography>
            <Link href="/terms" underline="hover" color="inherit">
              利用規約
            </Link>
          </Box>
        </div>
        <img src="/images/secure.svg" alt="Secure SSL Encryption" />
        <img src="/images/footer_logo.svg" alt="Footer_logo" />

        {/* Right Section */}


      </div>
    </Box>
  );
};

export default PublicFooter;
