import React from "react";

const ItemCustomCarousel = ({ src, legend }) => (
  <div>
    <img src={src} alt={legend} />
    <p>{legend}</p>
  </div>
);

export default ItemCustomCarousel;
