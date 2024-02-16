import React from "react";

import "./PageWrapper.scss";

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper-container">
      <div className="pwc-wrapper">{children}</div>
    </div>
  );
};

export default PageWrapper;
