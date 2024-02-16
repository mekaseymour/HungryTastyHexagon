import React from "react";

import BioCard from "./components/BioCard";

import "./Blocks.css";

const Blocks = ({ handleBlockToggle, isOpen }) => (
  <div className="blocks-container">
    <BioCard isOpen={isOpen} onToggle={handleBlockToggle} />
  </div>
);

export default Blocks;
