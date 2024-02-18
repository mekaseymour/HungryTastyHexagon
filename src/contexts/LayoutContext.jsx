import React, { createContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [engagedBlock, setEngagedBlock] = useState(null);

  const engageBlock = blockId => setEngagedBlock(blockId)
  const disengageBlock = () => setEngagedBlock(null)
  const isBlockEngaged = blockId => engagedBlock === blockId

  return (
    <LayoutContext.Provider value={{ engagedBlock, engageBlock, disengageBlock, isBlockEngaged }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
