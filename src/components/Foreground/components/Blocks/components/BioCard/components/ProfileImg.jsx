import React from "react";
import { motion } from "framer-motion";

import img from "../../../../../../../assets/logo.png";

import "./ProfileImg.css";

const ProfileImg = ({ shouldBeFullScreen }) => {
  return (
    <motion.div
      className="profile-img-container"
      animate={{
        width: shouldBeFullScreen ? "100%" : "64px",
        height: shouldBeFullScreen ? "auto" : "64px",
        borderRadius: shouldBeFullScreen ? "20px" : "8px",
        transition: shouldBeFullScreen
          ? {
              type: "spring",
              stiffness: 100,
              damping: 17,
            }
          : {
              type: "spring",
              stiffness: 100,
              damping: 16,
            },
      }}
    >
      <div className="profile-img-wrapper">
        <img src={img} alt="profile-img" />
      </div>
    </motion.div>
  );
};

export default ProfileImg;
