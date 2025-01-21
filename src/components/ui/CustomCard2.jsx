'use client'

import React from 'react';
import CustomBox from "./CustomBox.jsx";

export default function CustomCard2({
  imgSrc,
  imgAlt,
  cardTitle,
  cardDesc,
  cardWidth,
  comingSoon
}) {
  return (
    <div className='relative pt-6 mx-5'>
      <div className="absolute z-[5] border-[5px] p-3 w-[67px] h-[67px] border-solid border-[white] rounded-[50%] top-0 left-1/2 -translate-x-1/2" style={{ backgroundImage: "linear-gradient(180deg, #B7DDD8, #05999E)" }} >
        <img src={imgSrc} className="mx-auto" alt="" />
      </div>
      <CustomBox shadowColor="#ddd" borderRadius="15px" customPadding="0">
        <div style={{ backgroundImage: "linear-gradient(180deg, #B7DDD8, #05999E)" }} className="flex min-h-30 justify-center items-center align-middle pt-10 pb-5 relative">
          <span className="text-lg text-[white] font-bold">{cardTitle}</span>
        </div>
        <div className="mx-5 min-h-[8rem] pt-5 pb-5">{cardDesc}</div>
        {comingSoon ? <img src='/images/coming_soon.png' className='absolute top-1 right-[10px]' /> : <></>}
      </CustomBox>
    </div>
  )
}