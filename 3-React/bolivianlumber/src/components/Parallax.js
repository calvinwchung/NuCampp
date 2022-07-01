import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'

const image1 = "https://images4.alphacoders.com/932/thumb-1920-932271.jpg"
const image2 = "https://wallpaperaccess.com/full/773426.jpg"

const ParallaxScroll = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax className='paraImage' bgImage={ image1 } strength={ 500 }>
        <div style={{ height: 700 }}>
          <div className='paraText'>
          <Link className='paraLink' to='/about'>BOLIVIA</Link>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax className='paraImage' bgImage={ image2 } strength={ 500 }>
        <div style={{ height: 700 }}>
          <div className='paraText'>
          <Link className='paraLink' to='/inventory'>SHOP</Link>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}

export default ParallaxScroll;