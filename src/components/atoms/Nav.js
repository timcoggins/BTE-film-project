/**
 * Nav.js
 * Styled Component for the Navbar
 */
import styled from "styled-components";

const Nav = styled.nav`
    background: ${props => props.theme.colors.NavBarBackground};
    height: 60px;
    padding: 5px;
    
    display: flex;
    align-items: center;
    //position: sticky;
`;

export default Nav