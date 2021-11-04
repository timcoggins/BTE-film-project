/**
 * 
 * Navbar for all pages
 * 
 */

import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles

const Nav = styled.nav` 
`;

const NavBarContainer = styled.div`
  background: darkorange;
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
  text-deoration: none;
  display: inline-block;

  &:hover {
    color: white;
  }
`;

const Logo = styled.img`
  height: 40px;
 
  padding-left: 15px;
`;

/**
 * Navbar component
 * @returns {JSX.Element}
 */

const NavBar = () => {
    return (
      <Nav>
        <NavBarContainer>
          <Logo src="/Logo_cinema.png" />
          <Link to="/">
            <NavBarTitle>Movie app</NavBarTitle>
          </Link>
        </NavBarContainer>
      </Nav>
    );
}

export default NavBar;