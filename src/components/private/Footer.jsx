'use client'

import { Box, Typography, Link } from '@mui/material';

const PrivateFooter = () => {
  return (
    <Box
      component="footer"
    >
      <div className='flex justify-around  items-center'>
        {/* Left Section */}
        <div className='ml-[30%]'>
          <img src="/images/footer_logo_x.png" alt="Footer_logo" />
        </div>

        {/* Right Section */}

        <img src="/images/secure_x.png" alt="Secure SSL Encryption" />

      </div>
    </Box>
  );
};

export default PrivateFooter;
