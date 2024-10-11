import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ProfilePicture from './components/profilepicture/ProfilePicture';
import React, { useState, useEffect } from 'react';


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  return (
    <>
      Kevin
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <ProfilePicture />
    </>
  )
}

export default App
