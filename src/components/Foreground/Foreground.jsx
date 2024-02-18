import React from "react";

import ForegroundBlur from "./components/ForegroundBlur";
import Blocks from "./components/Blocks";
import ActionsFooter from './components/ActionsFooter'

const Foreground = () => (
  <>
    <Blocks />
    {/* <ActionsFooter shouldBeVisible={isOpen} onBackClick={handleBlockToggle} /> */}
    <ForegroundBlur />
  </>
);

export default Foreground;
