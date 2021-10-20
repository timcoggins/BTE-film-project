/**
 * 
 * Component that allows the user to choose between where to Rent, Buy or Stream
 * 
 */

import styled from 'styled-components' 

// Styles

const Button= styled.button`

` 

// Components

const WhereToWatchMethod = () => {
    return (
        <div>
            <Button>Stream</Button>
            <Button>Buy</Button>
            <Button>Rent</Button>
            <Button>Free</Button>
        </div>
    )
}

export default WhereToWatchMethod
