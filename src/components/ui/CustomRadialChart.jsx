import React from 'react';
import ApexRadialBarChart from './ApexRadialBarChart';

const CustomRadialChart = ({ title, label, progress }) => {
  return (
    <div >
      <p className='transform translate-y-[18px]'>{title}</p>
      <div className='relative'>
        <img src="/images/information.svg" alt="" className='absolute right-[27px] top-[29px]' />
        <ApexRadialBarChart progress={progress} />
        <div className='absolute right-[31%] top-[34%]'>
          <span className='text-[#6AD2C8] text-4xl'>{progress} <span className='text-base'>%</span></span>
        </div>
        <div className='rounded-[16px] bg-[#2ABFB0] w-[fit-content] px-2 absolute bottom-[33%] right-[33%]'>
          <span className='text-white'>{label}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomRadialChart;