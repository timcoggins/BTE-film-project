/**
 * CountryContainer.js
 * Styled Component for the genre bubbles
 */
import styled from "styled-components";

const CountryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width:600px) {
         justify-content: flex-start;
    }
`

export default CountryContainer;