import React from 'react'
import './Campus.css'
import Image1 from '../../assets/gallery-1.png'
import Image2 from '../../assets/gallery-2.png'
import Image3 from '../../assets/gallery-3.png'
import Image4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
