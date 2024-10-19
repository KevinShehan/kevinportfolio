
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
background-color:white`;
const NavLogo = styled(LinkR)``;

const Navbar = () => {
  return (
    <NavbarContainer className="navbar">
      <NavLogo>
        <a>Kevin</a>
      </NavLogo>
    </NavbarContainer>
  )
}

export default Navbar
