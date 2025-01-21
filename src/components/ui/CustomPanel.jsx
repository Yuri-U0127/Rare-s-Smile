import React from 'react';
import { Box } from '@mui/material';

const CustomPanel = ({ title, margin, children }) => {
  return (
    <div className='mt-5'>
      <div className='flex justify-center relative'>
        <div><span className='text-xl'>{title}</span></div>
        <div className="flex gap-2 absolute right-8">
          <img src="/images/create.svg" alt="" />
          <img src="/images/edit.svg" alt="" />
          <img src="/images/trash.svg" alt="" />
        </div>
      </div>
      <Box sx={{
        minWidth: "368px",
        width: "368px",
        height: "436px",
        boxShadow: `1px 1px 5px 1px #9999`,
        borderRadius: "25px",
        padding: "37px 31px",
        textAlign: "center",
        overflow: "hidden",
        margin: margin || "12px",
        backgroundColor: "#E9E9E9",
      }}>
        {children}
      </Box>
    </div>
  )
};
export default CustomPanel;
