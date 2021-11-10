/**
 * FilmInformationItem.js
 * Draws a singular piece of information for the film
 */

import P from '../atoms/P'
import H4 from "../atoms/H4";

/**
 * Film information item component
 * @param props
 * @returns {JSX.Element}
 */
const FilmInformationItem = (props) => {
    return (
        <tr>
            <td><H4>{props.title}</H4></td>
            <td><P>{props.text}</P></td>
        </tr>
    )
}

export default FilmInformationItem