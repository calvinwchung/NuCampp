import React from 'react';
import { useState, useEffect } from 'react';

const Parallax = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => (
    <>  
      <div className='parallax_content_heading'>
        <h1 className='parallax_content_heading_text'>WELCOME TO: BOLIVIA</h1>
      </div>
    </>
  );

  return (
    <section className='parallax'>
      <div 
        className='parallax_background' 
        style={{transform: `translateY(${offsetY * 0.65}px)`}} 
      />
      <div 
        className='parallax_background2' 
        style={{transform: `translateY(${offsetY * 0.65}px)`}} 
      />
      <div className='parallax_content'>{renderContent()}</div>
    </section>
  )
}

export default Parallax;