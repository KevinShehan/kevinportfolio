
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
background-color:${({theme})=>theme.bg};
height:80px;
display:flex;
align-items:center;
justify-content:center;
font-size:1rem;
position:sticky';
top:0;
z-index:10;`;

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
