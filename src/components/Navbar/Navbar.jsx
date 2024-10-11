import React from 'react';
// import ThemeSwitcher from './components/ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Alvin</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* <ThemeSwitcher theme={theme} setTheme={setTheme} /> */}
    </nav>
  )
}

export default Navbar
