/**
 * 
 * Navbar for all pages
 * 
 */
import { Link } from 'react-router-dom'

import styled from 'styled-components'

// Styles

const Nav = styled.nav` 
`;

const NavBarContainer = styled.div`
  background: darkorange;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 5px;
  position: sticky;
`;
const NavBarTitle = styled.h2`
  margin: 0;
  padding: 0px;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  text-deoration: none;
  display: inline-block;
  cursor: pointer;
`;

const Logo = styled.img`
    height: 55px;
    weight: 55px;
    padding: 0 15px;
`
// Components

const NavBar = () => {
    return (
      <Nav>
        <NavBarContainer>
          <Logo src="./Logo_cinema.png" />
          <Link to="/">
            <NavBarTitle>movie app</NavBarTitle>
          </Link>
        </NavBarContainer>
      </Nav>
    );
}

export default NavBar;