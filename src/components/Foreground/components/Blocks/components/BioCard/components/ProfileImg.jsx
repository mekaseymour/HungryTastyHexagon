import React from "react";

import img from "../../../../../../../assets/logo.png";

import "./ProfileImg.css";

const ProfileImg = () => {
  return (
    <div className="profile-img-container">
      <div className="profile-img-wrapper">
        <img
          src={img}
          alt="profile-img"
        />
      </div>
    </div>
  );
};

export default ProfileImg;
