import React, { useContext } from "react";

import ForegroundBlur from "./components/ForegroundBlur";
import Blocks from "./components/Blocks";
import ActionsFooter from './components/ActionsFooter'
import Room from "./components/Room";

import LayoutContext from '../../contexts/LayoutContext';

const Foreground = () => {
  const { openedRoomId, closeRoom } =
    useContext(LayoutContext);

  return (
    <>
      <Blocks />
      <Room isOpen={!!openedRoomId} header={openedRoomId === 'links' ? 'Links' : 'Socials'} onClose={closeRoom} />
      <ForegroundBlur />
    </>
  )
};

export default Foreground;
