import React, { useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card.jsx";

import "./HeaderCard.css";

// referencing this https://codesandbox.io/p/sandbox/framer-motion-2-scale-correction-z4tgr?file=%2Fsrc%2FApp.js%3A23%2C3-33%2C5&from-embed=

const HeaderCard = ({ isOpen, onToggle }) => {
  return (
    <motion.div
      data-block-name="bio"
      layout
      data-isOpen={isOpen}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      style={
        isOpen
          ? {
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderRadius: "32px",
              opacity: "1",
            }
          : {
              backdropFilter: "blur(30px)",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              borderRadius: "20px",
              opacity: "1",
            }
      }
      className="container"
      onClick={onToggle}
    >
      {/* <motion.div layout className="child" /> */}
      hello world
    </motion.div>
  );
};

export default HeaderCard;
