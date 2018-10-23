import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@material-ui/core";

const CustomCarousel = ({ children }) => (
  <Grid item xs={6}>
    <Carousel
      emulateTouch
      infiniteLoop
      autoPlay
      stopOnHover
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      useKeyboardArrows={true}
    >
      {children}
    </Carousel>
  </Grid>
);

export default CustomCarousel;
