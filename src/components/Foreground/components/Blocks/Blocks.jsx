import React from "react";

import BioCard from "./components/BioCard";
import Featured from "./components/Featured"

import "./Blocks.css";

const Blocks = () => (
  <div className="blocks-container">
    <BioCard />
    <Featured />
  </div>
);

export default Blocks;
