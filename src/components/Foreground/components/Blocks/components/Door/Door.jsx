import React from 'react'

import './Door.css'

const Door = ({ label, onOpen }) => <div className="door" onClick={onOpen}>{label}</div>

export default Door