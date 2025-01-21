import React from 'react';
import { Typography } from '@mui/material';

const PageTitle = ({ title }) => {
  return (
    <div className='text-center'>
      <Typography variant="h4" component="h2" sx={{ color: "var(--darkc)", display: "block" }}>{title}</Typography>
    </div>
  );
};

export default PageTitle;