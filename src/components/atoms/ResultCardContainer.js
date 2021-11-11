/**
 * ResultCardContainer.js
 * Styled Component the Result card container
 */
import styled from "styled-components";

const ResultCardContainer = styled.div`
  display: flex;
  flex-direction: column;
    @media screen and (min-width:500px) {

      justify-content: space-around;
      flex-direction: row;
      flex-wrap: wrap;
    }
    `

export default ResultCardContainer;