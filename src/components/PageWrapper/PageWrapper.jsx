import React, { useContext } from "react";

import LayoutContext from "../../contexts/LayoutContext";

import "./PageWrapper.css";

const PageWrapper = ({ children }) => {
  const { engagedBlock } = useContext(LayoutContext);

  return (
    <div
      className="page-wrapper-container"
      style={{ padding: engagedBlock ? "0px" : "20px" }}
    >
      <div className="pwc-wrapper">{children}</div>
    </div>
  );
};

export default PageWrapper;
