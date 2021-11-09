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
  color: #000000;
  font-weight: bold;
  font-size: 1.4rem;
  text-deoration: none;
  display: inline-block;

  &:hover {
    color: white;
  }
  @media screen and (min-width:500px) {
  font-size: 1.6rem;
  }

  @media screen and (min-width:800px) {
  font-size: 1.8rem;
  }
`;


const Logo = styled.img`
  height: 40px;

  padding-left: 15px;

 @media screen and (min-width:500px) {
  height: 45px;
  }
  @media screen and (min-width:800px) {
  height: 50px;
  }
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
            <NavBarTitle>Film Hero</NavBarTitle>
          </Link>
        </NavBarContainer>
      </Nav>
    );
}

export default NavBar;