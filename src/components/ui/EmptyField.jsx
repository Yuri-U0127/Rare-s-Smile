import React from 'react';
import { Box } from '@mui/material';

const EmptyField = ({ isFocused }) => {
  return (
    <>
      {/* {isFocused ? <img src="/images/photo_focus.svg" alt="" /> : <img src="/images/photo.svg" alt="" />} */}
      <div className='bg-[white] w-[100%], h-[100%] rounded-lg relative'>
        <img src="/images/green_circle_camera.svg" alt="" className='absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2' />
        <img src="/images/vector.svg" alt="" className='absolute right-0 rotate-180 transform -translate-x-1/2 translate-y-1/2  ' />
        <img src="/images/vector.svg" alt="" className='absolute bottom-0 transform translate-x-1/2 -translate-y-1/2' />
      </div>
    </>

  )
};
export default EmptyField;
