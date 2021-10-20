/**
 * 
 * Shows a carousel of other movies
 * 
 */

import styled from 'styled-components'

// Styles

const Container = styled.div`

`

const Title = styled.h3``

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const Item = styled.div`
    height: 100px;
    width: 100px;
    background: gainsboro;
    border 1px black solid;
`

// Component

const Carousel = () => {
    return (
        <Container>
            <Title>Suggested Movies</Title>
            <ItemContainer>
                <Item />
                <Item />
                <Item />
            </ItemContainer>
        </Container>
    )
}

export default Carousel