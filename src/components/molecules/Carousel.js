/**
 * 
 * Shows a carousel of other movies
 * 
 */

import { Link } from 'react-router-dom'
import { uid } from 'uid'
import { useState, useEffect } from 'react'
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
    border: 1px ${props => props.theme.colors.BorderColor} solid;

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

    const [ newData, setNewData ] = useState([])

    useEffect(() => {
        if(!props.data) return;
            setNewData(props.data.map(item => {
                if(item.media_type) return item;
                item.media_type = props.media;
                return item;
            }))
    }, [props.data, props.media]);

    return (
        <>
            {props.media === 'tv' && <H3>Similar TV Series</H3>}
            {props.media === 'movie' && <H3>Similar Movies</H3>}
            {props.media === undefined && <H3>Popular Content</H3>}
            {newData && <ItemContainer>
                {newData.map(item =>
                    <Link key={uid()} to={`/${item.media_type}/${item.id}`}>
                        <Item src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>
                    </Link>
                )}
            </ItemContainer>}
        </>
    )
}

export default Carousel;