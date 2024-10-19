import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ProfilePicture from './components/profilepicture/ProfilePicture';
import styled, { ThemeProvider } from "styled-components";                                                                                                                              
import {darkTheme} from './utils/Themes';

function App() {



  return (
    <>
      <ThemeProvider>
Kevin Shehan Perera
      </ThemeProvider>
    </>
  )
}

export default App
