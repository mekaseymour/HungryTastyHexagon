import React from "react";

import Block from '../../../Block';

import CONFIGS from '../../configs';

import "./FeaturedBlock.css";

const FeaturedBlock = ({ id }) => {
  const { img, title } = CONFIGS[id];

  return (
    <Block id={`featured-${id}`}>
      <div className={`featuredBlock ${id}`}>
        <img src={img} />
        <h3>{title}</h3>
      </div>
    </Block>
  );
};

export default FeaturedBlock;
