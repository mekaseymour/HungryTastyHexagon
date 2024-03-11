import React, { createContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [engagedBlock, setEngagedBlock] = useState(null);
  const [openedRoomId, setOpenedRoomId] = useState(null);

  const engageBlock = blockId => setEngagedBlock(blockId)
  const disengageBlock = () => setEngagedBlock(null)
  const isBlockEngaged = blockId => engagedBlock === blockId

  const openRoom = roomId => setOpenedRoomId(roomId)
  const closeRoom = () => setOpenedRoomId(null)

  return (
    <LayoutContext.Provider value={{ engagedBlock, engageBlock, disengageBlock, isBlockEngaged, openedRoomId, openRoom, closeRoom }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
