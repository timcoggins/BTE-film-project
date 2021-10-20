/**
 * 
 * Draws a singluar piece of information for the film
 * 
 */

import styled from 'styled-components'

// Styles

const Title = styled.h4``
const Text = styled.p``

// Component

export const FilmInformationItem = () => {
    return (
        <div>
            <Title>Rating</Title>
            <Text>Text</Text>
        </div>
    )
}

export default FilmInformationItem