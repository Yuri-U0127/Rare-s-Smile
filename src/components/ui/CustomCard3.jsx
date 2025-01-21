'use client'

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import GreenBadge from './GreenBadge';


export default function CustomCard3({
  imgSrc,
  // imgAlt,
  cardTitle,
  cardDesc,
  cardWidth,

}) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', minWidth: cardWidth || "auto", borderRadius: "20px", margin: "10px", padding: "none !important" }}>
      <CardContent sx={{ padding: "none !important" }}>
        <div className='rounded-t-lg mb-3 overflow-hidden'>
          <img src={imgSrc} alt="" />
        </div>
        <GreenBadge title="本人割引" />
        <div className='mt-3 p-3'>
          <Typography variant="h6" color="text.secondary">
            {cardTitle}

          </Typography>
          <p>
            {cardDesc}
          </p>
        </div>
      </CardContent>
    </Card >
  )
}