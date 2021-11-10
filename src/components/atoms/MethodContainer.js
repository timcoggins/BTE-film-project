/**
 * MethodContainer.js
 * Styled Component the where to watch method container
 */
import styled from "styled-components";

const MethodContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    @media screen and (min-width:600px) {
        justify-content: flex-start;
    }
`;

export default MethodContainer;