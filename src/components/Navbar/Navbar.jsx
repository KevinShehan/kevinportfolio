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

const Navbar = () => {
  return (
    <NavbarContainer className="navbar">
      <NavLogo to="/">
        Kevin Shehan
      </NavLogo>
      <NavItems>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavItems>
    </NavbarContainer>
  );
}

export default Navbar;
