import React from "react";
import { motion } from "framer-motion";

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
      <motion.div className="img-name-and-skills" style={isOpen ? {
      flexDirection: 'column-reverse'
      } : {flexDirection: 'row'}}
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 0.3 },
        }}
      >
        <ProfileImg shouldBeFullScreen={isOpen} />
        <div className="name-and-skill">
          <h1 className="name">Elephant Brand</h1>
          <div className="skill">Creative direction</div>
        </div>
      </motion.div>
      <p className="bio">hello bio text</p>
    </motion.div>
  );
};

export default BioCard;
