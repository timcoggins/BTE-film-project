/**
 * TD.js
 * Styled Component for the Trailer IFrame for youtube videos
 */
import styled from "styled-components";

const TrailerIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  //@media (min-width: 1025px);
`;

export default TrailerIframe