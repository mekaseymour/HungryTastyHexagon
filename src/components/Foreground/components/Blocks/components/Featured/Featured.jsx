import React from 'react'

import { FEATURE_BLOCK_IDS } from './configs'

import FeaturedBlock from './components/FeaturedBlock'

import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="split-featured-row">
        <FeaturedBlock id={FEATURE_BLOCK_IDS.left}/>
        <FeaturedBlock id={FEATURE_BLOCK_IDS.right} />
      </div>
      <FeaturedBlock id={FEATURE_BLOCK_IDS.main}/>
    </div>
  )
}

export default Featured