import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@material-ui/core";

const CustomCarousel = ({
  type,
  showArrows,
  autoPlay,
  axis,
  dynamicHeight,
  selectedItem,
  children
}) => (
  <Grid item xs={12} sm={6}>
    <Carousel
      selectedItem={selectedItem}
      emulateTouch
      infiniteLoop
      autoPlay={autoPlay}
      showIndicators={false}
      stopOnHover
      showStatus={false}
      showArrows={showArrows}
      showThumbs={false}
      axis={axis}
      useKeyboardArrows={false}
      className={type}
      dynamicHeight={dynamicHeight}
    >
      {children}
    </Carousel>
  </Grid>
);

export default CustomCarousel;
