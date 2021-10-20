/**
 * 
 * Display the synopsis of a movie
 * 
 */

import styled from 'styled-components' 

// Style

const SynTitle = styled.h4`

` 

const SynText = styled.p`

` 

// Component

export const Synopsis = () => {
    return (
        <div>
            <SynTitle>Synopsis title</SynTitle>
            <SynText>Synopsis text</SynText>
        </div>
    )
}

export default Synopsis