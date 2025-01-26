import React from 'react';

const CustomMobileMenuList = ({ imgSrc, title }) => {
  return (
    <div className="flex">
      <img src={imgSrc} />
      <span className='text-[#5A5A5A] ml-2'>{title}</span>
      <img src='/images/arrow.svg' className='block mr-0 ml-auto' />
    </div>
  );
};

export default CustomMobileMenuList;