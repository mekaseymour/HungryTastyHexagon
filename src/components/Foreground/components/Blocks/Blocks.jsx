import React from "react";

import BioCard from "./components/BioCard";

import "./Blocks.css";

const Blocks = () => (
  <div className="blocks-container">
    <BioCard />
    {/* <BioCard isOpen={isOpen} onToggle={handleBlockToggle} /> */}
  </div>
);

export default Blocks;
