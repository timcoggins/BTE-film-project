/**
 * 
 * Draws a singluar piece of information for the film
 * 
 */

import styled from 'styled-components'



// Styles

    const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
` 

const Title = styled.h4`
    padding-left: 10px;
    line-height: 2 ;
    margin-top: 0 ;
    margin-bottom: 0 ;
    font-size: 15px;
`
const Text = styled.p`
    padding-left: 5px;
    line-height: 2 ;
    margin-top: 0 ;
    margin-bottom: 0 ;
    font-size: 14px;
`

/**
 * Film information item component
 * @param props
 * @returns {JSX.Element}
 */

const FilmInformationItem = (props) => {
    
    return (
        <Container>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </Container>
    )
}

export default FilmInformationItem