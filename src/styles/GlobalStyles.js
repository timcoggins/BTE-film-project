/**
 * GlobalStyles.js
 * Sets the Global styles for the app
 */
import { createGlobalStyle } from 'styled-components';

// Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /*background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='200' stroke-opacity='0.18' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg transform='scale(0.946)' style='transform-origin:center'%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(-105.6 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%2327002B' href='%23a' transform='rotate(-39.6 0 0) scale(0.604)'/%3E%3Cuse stroke='%23340331' href='%23a' transform='rotate(-33 0 0) scale(0.67)'/%3E%3Cuse stroke='%23420436' href='%23a' transform='rotate(-26.4 0 0) scale(0.736)'/%3E%3Cuse stroke='%2351063b' href='%23a' transform='rotate(-19.8 0 0) scale(0.802)'/%3E%3Cuse stroke='%235f093f' href='%23a' transform='rotate(-13.2 0 0) scale(0.868)'/%3E%3Cuse stroke='%236e0d42' href='%23a' transform='rotate(-6.6 0 0) scale(0.934)'/%3E%3Cuse stroke='%237c1244' href='%23a'/%3E%3Cuse stroke='%238b1945' href='%23a' transform='rotate(6.6 0 0) scale(1.066)'/%3E%3Cuse stroke='%23992045' href='%23a' transform='rotate(13.2 0 0) scale(1.132)'/%3E%3Cuse stroke='%23a62945' href='%23a' transform='rotate(19.8 0 0) scale(1.198)'/%3E%3Cuse stroke='%23b33244' href='%23a' transform='rotate(26.4 0 0) scale(1.264)'/%3E%3Cuse stroke='%23c03c42' href='%23a' transform='rotate(33 0 0) scale(1.33)'/%3E%3Cuse stroke='%23cb4740' href='%23a' transform='rotate(39.6 0 0) scale(1.396)'/%3E%3Cuse stroke='%23d5523c' href='%23a' transform='rotate(46.2 0 0) scale(1.462)'/%3E%3Cuse stroke='%23df5f39' href='%23a' transform='rotate(52.8 0 0) scale(1.528)'/%3E%3Cuse stroke='%23e76b34' href='%23a' transform='rotate(59.4 0 0) scale(1.594)'/%3E%3Cuse stroke='%23ef792f' href='%23a' transform='rotate(66 0 0) scale(1.66)'/%3E%3Cuse stroke='%23f58729' href='%23a' transform='rotate(72.6 0 0) scale(1.726)'/%3E%3Cuse stroke='%23fa9522' href='%23a' transform='rotate(79.2 0 0) scale(1.792)'/%3E%3Cuse stroke='%23fda31a' href='%23a' transform='rotate(85.8 0 0) scale(1.858)'/%3E%3Cuse stroke='%23ffb210' href='%23a' transform='rotate(92.4 0 0) scale(1.924)'/%3E%3Cuse stroke='%23ffc106' href='%23a' transform='rotate(99 0 0) scale(1.99)'/%3E%3Cuse stroke='%23FFD000' href='%23a' transform='rotate(105.6 0 0) scale(2.056)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;*/
    background-color: #FFFFFF;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23BBBBBB'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
`;

export default GlobalStyle;