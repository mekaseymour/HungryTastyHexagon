import React from "react";
import { motion } from "framer-motion";

import ProfileImg from "./components/ProfileImg.jsx";

import "./BioCard.css";

// referencing this https://codesandbox.io/p/sandbox/framer-motion-2-scale-correction-z4tgr?file=%2Fsrc%2FApp.js%3A23%2C3-33%2C5&from-embed=

const BioCard = ({ isOpen, onToggle }) => {
  return (
    <motion.div
      data-isOpen={isOpen}
      data-block-name="bio"
      animate={{
        ...(isOpen
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
            }),
        transition: { duration: 0.2 },
      }}
      className="container"
      onClick={isOpen ? () => {} : onToggle}
    >
      <motion.div
        className="img-name-and-skills"
        animate={{
          flexDirection: isOpen ? "column-reverse" : "row",
          transition: { duration: 0.5 },
        }}
      >
        <ProfileImg shouldBeFullScreen={isOpen} />
        <motion.div
          className="name-and-skill"
          animate={{
            gap: isOpen ? "12px" : "6px",
            transition: { duration: 0.5 },
          }}
        >
          <h1 className="name">Elephant Brand</h1>
          <motion.div
            className="skill"
            animate={{
              backgroundColor: isOpen
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(230, 229, 229, 0.2)",
            }}
          >
            Creative direction
          </motion.div>
        </motion.div>
      </motion.div>
      <p className="bio">We create things people love</p>
    </motion.div>
  );
};

export default BioCard;
