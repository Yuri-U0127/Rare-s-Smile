import React from 'react';
import Image from 'next/image';
import { Box, Button } from '@mui/joy';
import { Input } from '@mui/material';

const SocialInput = ({ icon, placeholder }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 40,
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #e0e0e0',
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        mt: '16px'
      }}
    >
      <Button
        sx={{
          width: 40,
          height: 40,
          minWidth: 0,
          borderRadius: 0,
          background: 'linear-gradient(135deg, #67e6dc, #17a2b8)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            background: 'linear-gradient(135deg, #5dddc5, #13989a)',
          },
          padding: 0
        }}
      >
        <Image src={icon} alt="" width={30} height={30} sx={{ aspectRatio: "1" }} />
      </Button>
      <Input
        // variant="outlined"
        placeholder={placeholder}
        sx={{
          flex: 1,
          border: 'none',
          outline: 0,
          '& .MuiOutlinedInput-root': {
            height: 40,
            border: 'none',
            borderRadius: 0,
            backgroundColor: '#f9f9f9',
            '&:hover, &:focus': {
              border: "none",
              outline: "none",
            },
          },
          '& .MuiOutlinedInput-input': {
            padding: '0 12px',
            '&:hover, &:focus': {
              border: "none",
              outline: "none",
            },
          },
          '&::after, &::before': {
            border: "none"
          },

        }}
      />
    </Box>
  );
};

export default SocialInput;
