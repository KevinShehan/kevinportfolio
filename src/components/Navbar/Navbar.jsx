import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavLogo = styled(LinkR)`
  padding: 0 6px;
  text-decoration: none;
  color: white; /* Apply a specific color from your theme */
  font-weight: bold; /* Example of making it more visually distinct */
  font-size: 1.5rem; /* Adjust the font size */
  &:hover {
    color: ${({ theme }) => theme.hover}; /* Assuming you have a hover color in your theme */
  }
`;

const NavItems = styled.ul`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:32px;
  padding:0 6px;
  list-style:none;`;

  const NavLink = styled.a`
  color:${({theme})=> theme.text_primary}};
  font-weight:500;
  cursor:pointer;
  text-decoration:none;
  transition:all 0.2s ease-in-out;
  :hover{
  color:${({theme})=> theme.primary}
  };`;

const Navbar = () => {
  return (
    <NavbarContainer className="navbar">
      <NavLogo to="/">
        Kevin 
      </NavLogo>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#about">Skills</NavLink>
        <NavLink href="#about">Projects</NavLink>
        <NavLink href="#about">Contact</NavLink>
      </NavItems>
    </NavbarContainer>
  );
}

export default Navbar;
