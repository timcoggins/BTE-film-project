/**
 * NavBar.js
 * Navbar for all pages
 */
import { useContext } from "react";
import { Link } from 'react-router-dom'
import Nav from "../atoms/Nav";
import NavHeading from "../atoms/NavHeading";
import NavLogo from "../atoms/NavLogo";
import Button from "../atoms/Button";
import ThemeContext from "../../contexts/ThemeContext";
/**
 * Navbar component
 * @returns {JSX.Element}
 */
const NavBar = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
      <Nav>
          <div>
              <NavLogo src="/Logo_cinema.png" />
              <Link to="/">
                <NavHeading>Film Hero</NavHeading>
              </Link>
          </div>
          <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'}</Button>
      </Nav>
    );
}

export default NavBar;