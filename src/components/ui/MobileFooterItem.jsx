import { Link } from '@mui/material';
import React from 'react';

const MobileFooterItem = ({ imgSrc, title, link }) => {
  return (
    <Link href={link} underline="none" color="inherit">
      <div className=''>
        <img src={imgSrc} className='mx-auto' />
        <span className='text-white ml-2'>{title}</span>
      </div>
    </Link>
  );
};

export default MobileFooterItem;