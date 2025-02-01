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
          !isGroup ?
            <div className="flex absolute top-0 right-0 cursor-pointer">
              <img src={btnIcon} alt="" />
              {btnLabel}
            </div>
            :
            <div className="flex absolute top-0 right-[-90px] cursor-pointer">
              <img src={btnIcon} alt="" />
              {btnLabel}
            </div>
        )
        }
      </FormControl >
      {isGroup &&
        <Select
          sx={{

            border: 'none',
            transform: inputLab ? "translate(-3px, 7px)" : "translate(-4px, -6px)",
            backgroundColor: "white",
            boxShadow: "1px 1px 3px #ddd",
            height: "74.18px",
            '& .MuiSelect-select': {
              paddingRight: '8px',
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={2025}
        >
          {years.map((item, index) => (<MenuItem key={index} value={item}>{item}年</MenuItem>))}
        </Select>
      }
    </div >
  )
}
