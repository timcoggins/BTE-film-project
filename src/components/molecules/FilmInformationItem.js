/**
 * FilmInformationItem.js
 * Draws a singular piece of information for the film
 */

import P from '../atoms/P'

/**
 * Film information item component
 * @param props
 * @returns {JSX.Element}
 */
const FilmInformationItem = (props) => {
    return (
        <tr>
            <td><P><b>{props.title}</b></P></td>
            <td><P>{props.text}</P></td>
        </tr>
    )
}

export default FilmInformationItem