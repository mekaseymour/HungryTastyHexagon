import React from "react";

import "./PageWrapper.css";

const PageWrapper = ({ children, isFullScreen }) => {
  return (
    <div className="page-wrapper-container" style={{ padding: isFullScreen ? "0px" : "20px" }}>
          <div className="pwc-wrapper">{children}</div>
    </div>
  );
};

export default PageWrapper;
