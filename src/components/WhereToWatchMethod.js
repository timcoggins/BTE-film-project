/**
 * 
 * Component that allows the user to choose between where to Rent, Buy or Stream
 * 
 */

import styled from 'styled-components' 

// Styles

const Container= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
` 

const Button= styled.button`
    border: 1px solid black;
    padding: 8px 25px;
    border-radius: 4px;
    :hover {
        background: #98BAE7;
        color: black;
     }
     &:hover {
         color: blue;
        }
     font-size: 15px;
` 

// Components

const WhereToWatchMethod = () => {
    return (
        <Container>
            <Button>Stream</Button>
            <Button>Buy</Button>
            <Button>Rent</Button>
            <Button>Free</Button>
        </Container>
    )
}

export default WhereToWatchMethod
