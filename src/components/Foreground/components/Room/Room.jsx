import React from "react";
import { motion } from "framer-motion";

import "./Room.css";

const Room = ({ header, children, isOpen, onClose }) => (
    <motion.div className="room" data-isOpen={isOpen} onClick={onClose} layout>
      <h1>{header}</h1>
      {children}
    </motion.div>
  )

export default Room;
