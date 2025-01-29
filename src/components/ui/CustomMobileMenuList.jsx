import React from 'react';
import { Link } from '@mui/material';

const CustomMobileMenuList = ({ imgSrc, title, link }) => {
  return (
    <Link href={link} underline="none" color="inherit">
      <div className="flex">
        <img src={imgSrc} />
        <span className='text-[#5A5A5A] ml-2'>{title}</span>
        <img src='/images/arrow.svg' className='block mr-0 ml-auto' />
      </div>
    </Link>
  );
};

export default CustomMobileMenuList;