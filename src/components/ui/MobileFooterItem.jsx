import React from 'react';

const MobileFooterItem = ({ imgSrc, title }) => {
  return (
    <div className=''>
      <img src={imgSrc} className='mx-auto' />
      <span className='text-white ml-2'>{title}</span>
    </div>
  );
};

export default MobileFooterItem;