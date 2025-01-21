import React from 'react';
import CustomBox from './CustomBox';
import { FormControlLabel } from '@mui/material';

import CustomSwitch from './CustomSwitch';

const CustomOption = ({ imgSrc, title, widthControl }) => {
  return (
    <CustomBox shadowColor="#ddd" borderRadius="15px" widthControl={widthControl}>
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