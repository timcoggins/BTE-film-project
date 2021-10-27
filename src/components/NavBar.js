/**
 * 
 * Navbar for all pages
 * 
 */
import { Link } from 'react-router-dom'

import styled from 'styled-components'

// Styles

const Container = styled.div`
    background: #98bae7;
    width: 100%;
    display: flex;
`
const Title = styled.h2`
    margin: 0;
    padding: 5px;
    color: black;
`

const Logo = styled.img`
    height: 30px;
    weight: 30px;
    padding: 5px;
`
// Components

const NavBar = () => {
    return (
        <Container>
            <Logo src='./clapper-board.png'/>
            <Link to="/"><Title>Movie App</Title></Link>
        </Container>
    )
}

export default NavBar