/**
 * 
 * Component that allows the user to choose between where to Rent, Buy or Stream
 * 
 */

import styled from 'styled-components'
import { css } from 'styled-components'

// Styles

const Container= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
` 

const Button= styled.button`
    margin: 0 5px;
    border: 1px solid black;
    padding: 8px 25px;
    border-radius: 4px;

     &:hover {
       background: #98BAE7;
         color: white;
        }
     font-size: 15px;
  
    ${props => props.active && css`
      background: cornflowerblue;
      color: white;
    `}
  
`

/**
 * Where to watch method component
 * @param props
 * @returns {JSX.Element}
 */

const WhereToWatchMethod = (props) => {
    return (
        <Container>
            <Button active={props.watchMethod === 'flatrate'} onClick={() => props.setWatchMethod('flatrate')}>Stream</Button>
            <Button active={props.watchMethod === 'buy'} onClick={() => props.setWatchMethod('buy')}>Buy</Button>
            <Button active={props.watchMethod === 'rent'} onClick={() => props.setWatchMethod('rent')}>Rent</Button>
        </Container>
    )
}

export default WhereToWatchMethod
