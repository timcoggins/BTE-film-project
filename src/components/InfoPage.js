/**
 * 
 * Displays all the info about 1 particular movie
 * 
 */

import styled from 'styled-components'

import WhereToWatch from './WhereToWatch'
import Trailer from './Trailer'
import FilmInformation from './FilmInformation'
import Synopsis from './Synopsis'
import Carousel from './Carousel'

// Styles

const InfoImage = styled.img`
width: 100%;
margin: 0;
padding: 0;
height: 300px;
`

// Component

const InfoPage = () => {
 
return(
    <>
        <h1>Film Title</h1>
        <h3>2021</h3>
        <InfoImage src='http://placekitten.com/200/300' alt='Movie Poster'/>
        <WhereToWatch />
        <Trailer />
        <FilmInformation />
        <Synopsis />
        <Carousel />
    </>
)

}
export default InfoPage