import React from "react";

import ForegroundBlur from "./components/ForegroundBlur";
import Blocks from "./components/Blocks";

const Foreground = ({ handleBlockToggle, isOpen }) => (
  <>
    <Blocks handleBlockToggle={handleBlockToggle} isOpen={isOpen} />
    <ForegroundBlur />
  </>
);

export default Foreground;
