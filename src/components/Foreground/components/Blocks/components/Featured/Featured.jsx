import React, { useContext } from 'react'
import { motion } from "framer-motion";

import LayoutContext from '../../../../../../contexts/LayoutContext';

import { FEATURE_BLOCK_IDS } from './configs'

import FeaturedBlock from './components/FeaturedBlock'

import "./Featured.css"

const Featured = () => {
  const { engagedBlock } = useContext(LayoutContext);

  const mainFeaturedBlockIsOpen = engagedBlock === `featured-${FEATURE_BLOCK_IDS.main}`;
  
  return (
    <div className="featured">
      <motion.div className="split-featured-row" data-layout={mainFeaturedBlockIsOpen ? 'offScreenTop' : null} layout>
        <FeaturedBlock id={FEATURE_BLOCK_IDS.left}/>
        <FeaturedBlock id={FEATURE_BLOCK_IDS.right} />
      </motion.div>
      <FeaturedBlock id={FEATURE_BLOCK_IDS.main}/>
    </div>
  )
}

export default Featured