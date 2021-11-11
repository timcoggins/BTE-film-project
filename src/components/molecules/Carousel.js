/**
 * 
 * Shows a carousel of other movies
 * 
 */

import { Link } from 'react-router-dom'
import { uid } from 'uid'
import styled from 'styled-components'


// Styles

const Container = styled.div`

`

const Title = styled.h3`

    @media screen and (min-width:500px) {
        font-size: 20px;
    }
      @media screen and (min-width:800px) {
        font-size: 22px;
    }
`;

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
        <Container>
            <Title>Suggested Movies</Title>
            {props.data && <ItemContainer>
                {props.data.map(item =>
                    <Link key={uid()} to={`/movie/${item.id}`}>
                        <Item src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>
                    </Link>
                    )}
            </ItemContainer>}
        </Container>
    )
}

export default Carousel