import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import {Bio} from '../../data/constants';

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
width:80%;
  padding: 0 6px;
  text-decoration: none;
  color: white; /* Apply a specific color from your theme */
 
`;

const NavItems = styled.ul`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:32px;
  padding:0 6px;
  list-style:none;
    @media screen and (max-width: 768px){
  display:none;}`;

const NavLink = styled.a`
  color:${({ theme }) => theme.text_primary};
  font-weight:500;
  cursor:pointer;
  text-decoration:none;
  transition:all 0.2s ease-in-out;
  &:hover{
  color:${({ theme }) => theme.primary}
  ;`;

const ButtonContainer = styled.div`
width:80%;
height:100%;
display:flex;
  justify-content: end;
  align-items:center;
  padding: 0 6px;
  @media screen and (max-width: 768px){
  display:none;}
  `;

const GithubBUtton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color:${({ theme }) => theme.primary};
  justify-content:center;
  display:flex;
  align-items: center;
  padding: 10px 20px;
  border-radius:20px;
  cursor:pointer;
  font-size:16px;
  font-weight:500;
  transition:all 0.5s ease-in-out;
  text-decoration:none;
  &:hover{
  color:${({ theme }) => theme.primary};
  background-color:${({ theme }) => theme.primary};
  `;

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

      <ButtonContainer>
        <GithubBUtton href={Bio.github} target='_blank'>GitHub Profile</GithubBUtton>
      </ButtonContainer>
    </NavbarContainer>
  );
}

export default Navbar;
