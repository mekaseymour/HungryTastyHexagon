import React from "react";

import featuredLeft from "../../../../../../assets/featuredLeft.jpeg";
import featuredRight from "../../../../../../assets/featuredRight.jpeg";

import Block from '../Block';

import "./SplitFeatured.css";

const getConfigs = (position) => ({
  img: position === "left" ? featuredLeft : featuredRight,
  title:
    position === "left"
      ? "Designing personal portfolios"
      : "Crafting custom websites",
});

const SplitFeatured = ({ position }) => {
  const { img, title } = getConfigs(position);

  return (
    <Block id={`split-featured-${position}`}>
      <div className={`splitFeatured ${position}`}>
        <img src={img} />
        <h3>{title}</h3>
      </div>
    </Block>
  );
};

export default SplitFeatured;
