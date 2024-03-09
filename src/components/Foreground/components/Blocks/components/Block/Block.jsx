import React, { useContext } from "react";
import { motion } from "framer-motion";

import LayoutContext from "../../../../../../contexts/LayoutContext";

import "./Block.css";

const Block = ({ id, children }) => {
  const { isBlockEngaged, engageBlock, disengageBlock } =
    useContext(LayoutContext);

  const isOpen = isBlockEngaged(id);

  return (
    <motion.div
      className="block"
      data-isOpen={isOpen}
      animate={{
        ...(isOpen
          ? {
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderRadius: "32px",
              opacity: "1",
              height: "100vh",
            }
          : {
              backdropFilter: "blur(30px)",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              borderRadius: "20px",
              opacity: "1",
              height: "fit-content",
            }),
        transition: { duration: 0.2 },
      }}
      onClick={isOpen ? disengageBlock : () => engageBlock(id)}
    >
      {children}
    </motion.div>
  );
};

export default Block
