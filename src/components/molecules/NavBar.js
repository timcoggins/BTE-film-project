/**
 * NavBar.js
 * Navbar for all pages
 */
import { Link } from 'react-router-dom'
import Nav from "../atoms/Nav";
import NavHeading from "../atoms/NavHeading";
import NavLogo from "../atoms/NavLogo";

/**
 * Navbar component
 * @returns {JSX.Element}
 */
const NavBar = () => {
    return (
      <Nav>
          <NavLogo src="/Logo_cinema.png" />
          <Link to="/">
            <NavHeading>Film Hero</NavHeading>
          </Link>
      </Nav>
    );
}

export default NavBar;