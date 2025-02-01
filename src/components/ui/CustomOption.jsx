import React from 'react';
import CustomBox from './CustomBox';
import { FormControlLabel } from '@mui/material';

import CustomSwitch from './CustomSwitch';
import { Padding } from '@mui/icons-material';

const CustomOption = ({ imgSrc, title, widthControl, matches }) => {
  return (
    <CustomBox shadowColor="#ddd" borderRadius="15px" widthControl={widthControl} customPadding={matches ? "20px 30px 30px 30px" : "10px 8px 10px 8px"}>
      <div className="flex">
        {title}
        <img src={imgSrc} alt="" />
      </div>
      <FormControlLabel
        control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
      />
    </CustomBox>
  );
};

export default CustomOption;