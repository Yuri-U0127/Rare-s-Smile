// ScrollToTopButton.js
import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: "100px",
          right: 16,
          zIndex: 1000,
        }}
        onClick={scrollToTop}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <IconButton
          sx={{
            width: 56,
            height: 56,
            backgroundColor: 'transparent',
            border: '2px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >

          <Box sx={{ textAlign: 'center', fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)', marginTop: '4px' }}>
            <ArrowUpwardIcon sx={{ color: 'rgba(0, 0, 0, 0.6)' }} />
            Top
          </Box>
        </IconButton>
      </Box>
    </>
  );
};

export default ScrollToTopButton;