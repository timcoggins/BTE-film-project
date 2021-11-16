/**
 * CastImage.js
 * Styled Component the Cast Image 
 */
import styled from "styled-components";

const CastImage = styled.img`
 
  border: 1px ${(props) => props.theme.colors.BorderColor} solid;
  border-radius: 3px;
`;

export default CastImage;
