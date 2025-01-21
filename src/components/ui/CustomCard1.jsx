'use client'

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function CustomCard({
  imgSrc,
  imgAlt,
  cardTitle,
  cardDesc,
  cardWidth,
  comingSoon
}) {
  return (
    <div className='relative'>
      <Card sx={{ display: 'flex', alignItems: 'center', padding: "10px 20px 10px 30px", minWidth: cardWidth || "auto", }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: 100, height: 100, marginRight: 16, scale: 1.4, display: "block", position: "absolute", transform: "translateY(-15%)", marginLeft: "13px" }}
        />
        <CardContent sx={{ padding: "10px 20px 10px 50%" }}>
          <Typography variant="h6" fontWeight="bold">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDesc}
          </Typography>
        </CardContent>
      </Card>
      {comingSoon ? <img src='/images/coming_soon.png' className='absolute top-[-20%] right-6' /> : <></>}
    </div>
  )
}