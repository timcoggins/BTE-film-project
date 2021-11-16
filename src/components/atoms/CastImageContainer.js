/**
 * CastImageContainer.js
 * Styled Component the Cast Image Container
 */
import styled from "styled-components";

const CastImageContainer = styled.div`
  display: flex;

  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.Paragraph};
  }
`;
  


export default CastImageContainer;
