import React from "react";
import { motion } from "framer-motion";

import "./ActionsFooter.css";

const LeftArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
)

const ActionsFooter = ({ shouldBeVisible, onBackClick }) => (
  <motion.div className="actions-footer-container" animate={{ display: shouldBeVisible ? 'block' : 'none', opacity: shouldBeVisible ? 1 : 0, transition: { duration: 0.5, ease: 'linear' } }}>
    <button onClick={onBackClick}>
      <LeftArrow />
    </button>
  </motion.div>
);

export default ActionsFooter;
