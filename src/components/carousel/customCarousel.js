import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@material-ui/core";

const CustomCarousel = ({ type, showArrows, autoPlay, children }) => (
  <Grid item xs={6}>
    <Carousel
      emulateTouch
      infiniteLoop
      autoPlay={autoPlay}
      showIndicators={false}
      stopOnHover
      showStatus={false}
      showArrows={showArrows}
      showThumbs={false}
      useKeyboardArrows={false}
      className={type}
    >
      {children}
    </Carousel>
  </Grid>
);

export default CustomCarousel;
