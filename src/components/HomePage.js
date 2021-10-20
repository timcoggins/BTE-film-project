/**
 * 
 * Home page where the search and popular movies/tv are
 * 
 */

import HomePageImage from "./HomePageImage"
import Search from "./Search"
import Carousel from "./Carousel"

import styled from 'styled-components'

// Styles

const HomeContainer = styled.div`
    margin: 0 auto;
`

// Components

const HomePage = () => {

return(
        <HomeContainer>
            <HomePageImage src='http://placekitten.com/200/300'/>
            <Search />
            <Carousel />
        </HomeContainer>
)

}
export default HomePage