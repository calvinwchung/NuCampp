import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'

const image1 = "https://images4.alphacoders.com/932/thumb-1920-932271.jpg"
const image2 = "https://c4.wallpaperflare.com/wallpaper/90/929/128/road-misty-forest-twilight-wallpaper-preview.jpg"
const image3 = "https://c4.wallpaperflare.com/wallpaper/205/989/86/morning-forest-sunlight-path-wallpaper-preview.jpg"

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
      <Parallax className='paraImage' bgImage={ image3 } strength={ 500 }>
        <div style={{ height: 700 }}>
          <div className='paraText'>
          <Link className='paraLink' to='/contact'>CONTACT US</Link>
          </div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}

export default ParallaxScroll;