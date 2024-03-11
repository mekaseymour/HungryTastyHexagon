import React, { useContext } from "react";
import { motion } from "framer-motion";

import LayoutContext from "../../../../../../../../contexts/LayoutContext";

import Block from "../../../Block";

import CONFIGS, { FEATURE_BLOCK_IDS } from "../../configs";

import "./FeaturedBlock.css";

const FeaturedBlock = ({ id }) => {
  const { engagedBlock } = useContext(LayoutContext);
  const shouldAnimateOffscreenLeft =
    engagedBlock === `featured-${FEATURE_BLOCK_IDS.right}` &&
    id === FEATURE_BLOCK_IDS.left;
  const shouldAnimateOffscreenRight =
    engagedBlock === `featured-${FEATURE_BLOCK_IDS.left}` &&
    id === FEATURE_BLOCK_IDS.right;
  const getBlockLayout = () => {
    if (shouldAnimateOffscreenLeft) return "offScreenLeft";
    else if (shouldAnimateOffscreenRight) return "offScreenRight";
    else return null;
  };

  console.log('id', id, 'engagedBlock', engagedBlock)

  const { img, title } = CONFIGS[id];

  return (
    <Block id={`featured-${id}`} layoutId={getBlockLayout()}>
      <motion.div className={`featuredBlock ${id}`} data-isOpen={`featured-${id}` === engagedBlock}>
        <h1>{title}</h1>
        <img src={img} />
        <h3>{title}</h3>
      </motion.div>
    </Block>
  );
};

export default FeaturedBlock;
