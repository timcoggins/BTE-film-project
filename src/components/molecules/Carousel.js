/**
 * 
 * Shows a carousel of other movies
 * 
 */

import { Link } from 'react-router-dom'
import { uid } from 'uid'
import styled from 'styled-components'
import H3 from '../atoms/H3'

// Styles

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
`

const Item = styled.img`
    width: 100px;
    background: gainsboro;
    border: 1px black solid;

    @media screen and (min-width:500px) {
        width: 150px;
    }
      @media screen and (min-width:800px) {
        width: 190px;
    }
`

/**
 * Carousel component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Carousel = (props) => {
    return (
        <>
            <H3>Suggested Movies</H3>
            {props.data && <ItemContainer>
                {props.data.map(item =>
                    <Link key={uid()} to={`/movie/${item.id}`}>
                        <Item src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>
                    </Link>
                    )}
            </ItemContainer>}
        </>
    )
}

export default Carousel