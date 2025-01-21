import React from 'react';

const CutomList = ({ text, imgSrc }) => {
  return (
    <div className="flex justify-between border-b w-[90%] mx-auto pt-2 pb-2">
      <div>{text}</div>
      <img src={imgSrc} alt="" className="cursor-pointer" />
    </div>
  );
};

export default CutomList;