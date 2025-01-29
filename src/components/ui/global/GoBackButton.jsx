import { Link } from '@mui/material';
import React from 'react';

const GoBackButton = ({ link }) => {
  return (
    <Link href={link} underline="none" color="inherit">
      <div className='text-lg scale-150 pt-2'>←</div>
    </Link>
  );
};

export default GoBackButton;