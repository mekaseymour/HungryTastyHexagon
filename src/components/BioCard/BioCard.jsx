import React, { useState } from "react";
import { motion } from "framer-motion";

import Card from "../Card.jsx";
import ProfileImg from "./components/ProfileImg.jsx";

import "./BioCard.css";

// referencing this https://codesandbox.io/p/sandbox/framer-motion-2-scale-correction-z4tgr?file=%2Fsrc%2FApp.js%3A23%2C3-33%2C5&from-embed=

const BioCard = ({ isOpen, onToggle }) => {
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
              backgroundColor: "rgba(0, 0, 0, 0.1)",
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
      <div className="img-name-and-skills">
        <ProfileImg />
        <div>
          <div>
            hello name
          </div>
          <div>
            hello skills
          </div>
        </div>
      </div>
      <div>hello bio text</div>
    </motion.div>
  );
};

export default BioCard;
