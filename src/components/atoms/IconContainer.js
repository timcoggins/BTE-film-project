/**
 * IconContainer.js
 * Styled Component for provider icon container
 */
import styled from "styled-components";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    padding: 20px;
    place-content: center;

    /*@media screen and (min-width:600px) {
        justify-content: flex-start;*/
`
export default IconContainer;