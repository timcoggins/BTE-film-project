/**
 * Footer.js
 * Component for the footer information
 */
import FooterContainer from "../atoms/FooterContainer";
import P from '../atoms/P'

/**
 * Footer
 * @returns {JSX.Element}
 */
const Footer = () => {
    // JSX
    return(
        <FooterContainer>
            <p>Movie data supplied by The Movie DB</p>
        </FooterContainer>
    )
}

export default Footer;