import React, { useContext } from "react";
import { motion } from "framer-motion";

import BioCard from "./components/BioCard";
import Featured from "./components/Featured"
import Door from "./components/Door"

import ROOM_IDS from "../../../../constants/roomIds"

import LayoutContext from "../../../../contexts/LayoutContext";

import "./Blocks.css";

const Blocks = () => {
  const { openRoom, openedRoomId } =
    useContext(LayoutContext);

  return (
    <motion.div className="blocks-container" data-isOffScreen={!!openedRoomId} layout>
      <BioCard />
    <Featured />
      <div className="quick-doors">
        <Door onOpen={() => openRoom(ROOM_IDS.social)} label="Socials" />
        <Door onOpen={() => openRoom(ROOM_IDS.links)} label="Links" />
      </div>
    </motion.div>
  );
}

export default Blocks;
