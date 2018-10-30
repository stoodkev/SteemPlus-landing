import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Grid } from "@material-ui/core";

const CustomCarousel = ({ nbElem, autoPlay, selectedItem, children }) => (
  <Grid item xs={12} sm={6}>
    <AliceCarousel
      dotsDisabled={true}
      autoPlay={autoPlay}
      stopAutoPlayOnHover={true}
      duration={500}
      infinite={true}
      autoPlayInterval={1000}
      startIndex={selectedItem}
      responsive={{
        0: {
          items: 1
        },
        1024: {
          items: { nbElem }
        }
      }}
    >
      {children}
    </AliceCarousel>
  </Grid>
);

export default CustomCarousel;
