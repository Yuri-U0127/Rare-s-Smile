'use client'

import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { Select, MenuItem } from '@mui/material';

export default function CustomInput({
  imgSrc,
  imgAlt,
  inputPlaceholder,
  inputLab,
  customWidth,
  extraButton,
  btnLabel,
  btnIcon,
  isGroup
}) {

  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,]

  return (
    <div className="w-full">
      <FormControl >
        <FormLabel sx={{ color: "inherit" }}>
          <div className="flex">
            <img src={imgSrc} alt={imgAlt} style={{ marginRight: '8px' }} />
            {inputLab}
          </div>
        </FormLabel>
        <Input placeholder={inputPlaceholder} sx={{ width: customWidth || "100%", padding: "24px", marginBottom: "16px" }} />
        {extraButton && (

          <div className="flex absolute top-0 right-0 cursor-pointer">
            <img src={btnIcon} alt="" />
            {btnLabel}
          </div>
        )
        }
      </FormControl >
    </div >
  )
}
