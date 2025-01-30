import React from 'react';
import dynamic from "next/dynamic";
import Box from '@mui/material/Box';
import SwipeableViews from "react-swipeable-views";
const CustomPanel = dynamic(() => import('../../components/ui/CustomPanel'));
const EmptyField = dynamic(() => import('../../components/ui/EmptyField'));

const CustomCarousel = ({ number, carouselIndex, setCarouselIndex }) => {

  let slides = []
  for (let i = 0; i < number; i++) slides[i] = i

  return (
    <>
      <SwipeableViews index={carouselIndex} onChangeIndex={setCarouselIndex} enableMouseEvents>
        <CustomPanel title={"表面"}>
          <EmptyField />
        </CustomPanel>
        <CustomPanel title={"表面"}>
          <EmptyField />
        </CustomPanel>
        <CustomPanel title={"表面"}>
          <EmptyField />
        </CustomPanel>
      </SwipeableViews>
      <Box sx={{ display: "flex", justifyContent: "center", marginInline: "auto" }} mt={1}>
        {slides.map((i) => (
          <Box
            key={i}
            onClick={() => setCarouselIndex(i)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: carouselIndex === i ? "grey.700" : "grey.400",
              mx: 0.5,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </>

  );
};

export default CustomCarousel;