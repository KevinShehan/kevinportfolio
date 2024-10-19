import Navbar from './components/Navbar/Navbar';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes';
import {BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </ThemeProvider >
    </>
  )
}

export default App
