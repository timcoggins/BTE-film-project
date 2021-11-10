/**
 * ResultCard.js
 * Styled Component the Result card when a user searches
 */
import styled from "styled-components";

const ResultCard = styled.div`
    background: ${props => props.theme.colors.CardBackground};
    margin: 20px;
    border: 1px gainsboro solid;
    border-radius: 4px;
    padding: 10px;
    
    img {
      width: 100%;
    }
    
    p {
    font-size: 14px;
      margin: 5px 0;
    }
`

export default ResultCard;