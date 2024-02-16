import React from 'react'

import img from '../../../assets/background.jpeg'

import './BackgroundImg.css'

const BackgroundImg = () => {
  return (
    <div className="background-img-container">
      <div className="background-img-wrapper">
        <div className="background-img-inner-wrapper">
          <div classNam="background-img-inner-inner-wrapper">
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundImg