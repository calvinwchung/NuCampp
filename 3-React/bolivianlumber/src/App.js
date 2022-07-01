import React from 'react';
import Header from './components/Header';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import InventoryPage from './pages/InventoryPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          {/* <Route path='/inventory' element={<InventoryPage />} /> */}
          <Route path='inventory/:campsiteId' element={<InventoryPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
