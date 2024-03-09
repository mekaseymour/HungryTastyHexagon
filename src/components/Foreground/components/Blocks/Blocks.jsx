import React from "react";

import BioCard from "./components/BioCard";
import SplitFeatured from "./components/SplitFeatured"

import "./Blocks.css";

const Blocks = () => (
  <div className="blocks-container">
    <BioCard />
    {/* <BioCard isOpen={isOpen} onToggle={handleBlockToggle} /> */}
    <div className="row">
      <SplitFeatured position="left"/>
      <SplitFeatured position="right" />
    </div>
  </div>
);

export default Blocks;
