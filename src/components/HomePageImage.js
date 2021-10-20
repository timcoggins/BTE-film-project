/**
 * 
 * Hero image for the home page
 * 
 */

import styled from 'styled-components'

// styles

const PageImage = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;
    height: 300px;
`
// components

const HomePageImage = () => {
    return(
        <PageImage src='http://placekitten.com/200/300'/>
    )

}

export default HomePageImage