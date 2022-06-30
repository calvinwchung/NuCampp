import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import WoodLogo from './app/assets/logo.png';
import { useState, useEffect } from 'react';
// import background from './app/assets/background';
import './App.css';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className='App'>
        <Navbar dark color='primary' sticky='top' expand='md'>
          <Container>
            <NavbarBrand href='/'>
              <img src={WoodLogo} alt='wood logo' />
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
  
      <div className='parallax_content_heading'>
        <h1 className='parallax_content_heading_text'>Closure</h1>
        <h2 className='parallax_content_heading_caption'>
          Your one-stop source of Web Development tricks
        </h2>
      </div>
      <div className='parallax_content_cta'>
        <p>
          <b>1. like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. like the video</b> To see more content like this!
        </p>
        <p>
          <b>3. follow the github link</b> and play with the code yourself!
        </p>
      </div>
    </>
  );

  return (
    <section className='parallax'>
      <div 
        className='parallax_background' 
        style={{transform: `translateY(${offsetY * 0.65}px)`}} 
      />
      <div className='parallax_background-triangles' />
      <div className='parallax_content'>{renderContent()}</div>
    </section>
  );
}

export default App;
