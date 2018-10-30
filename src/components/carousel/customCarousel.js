import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const buttonStyle = {
  root: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    color: "lightgrey",
    "&:hover": {
      background: "lightgrey",
      color: "white"
    }
  }
};
const ArrowButton = withStyles(buttonStyle)(Button);

class CustomCarousel extends React.Component {
  constructor(props) {
    super();
    this.nbElem = props.nbElem;
    this.autoPlay = props.autoPlay;
    this.selectedItem = props.selectedItem;
    this.sizeElement = props.sizeElement;
  }

  render() {
    return (
      <Grid item xs={12} sm={12} md={6} lg={this.sizeElement}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid key={`prev`} xs={1} item>
            <ArrowButton
              variant="fab"
              aria-label="Prev"
              onClick={() => this.Carousel._slidePrev()}
            >
              <KeyboardArrowLeft />
            </ArrowButton>
          </Grid>
          <Grid key={`car`} xs={10} item>
            <AliceCarousel
              dotsDisabled={true}
              autoPlay={this.autoPlay}
              stopAutoPlayOnHover={true}
              duration={500}
              infinite={true}
              autoPlayInterval={5000}
              startIndex={this.selectedItem}
              responsive={{
                0: {
                  items: 1
                },
                600: {
                  items: this.nbElem
                },
                1024: {
                  items: this.nbElem
                }
              }}
              buttonsDisabled={true}
              ref={el => (this.Carousel = el)}
            >
              {this.props.children}
            </AliceCarousel>
          </Grid>
          <Grid key={`next`} xs={1} item>
            <ArrowButton
              variant="fab"
              aria-label="Next"
              onClick={() => this.Carousel._slideNext()}
            >
              <KeyboardArrowRight />
            </ArrowButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CustomCarousel;
