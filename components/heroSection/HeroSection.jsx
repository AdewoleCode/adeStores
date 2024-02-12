import React from 'react'
import "./HeroSection.css"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className="hero-wrapper">

        <div className="left">
          <h1>WHERE SOULFUL <span>CYCLING</span>  BEGINS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            adipisicing elit. Ab, aperiam? adipisicing elit. ipsum dolor si.
          </p>
          <div className="btn-box">
            <button className='black-btn'>SHOP NOW</button>
            <button className='blue-btn'>PRODUCTS</button>
          </div>
        </div>
        <div className="right">
          <Image src={"/1.png"} width={520} height={310} />
        </div>
      </div>

    </div>
  )
}

export default HeroSection