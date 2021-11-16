/**
 * FilmInformation.js
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 */
import { uid } from 'uid'
import FilmInformationItem from './FilmInformationItem'
import Bubble from "../atoms/Bubble";
import BubbleContainer from "../atoms/BubbleContainer";
import TD from '../atoms/TD'
import H3 from "../atoms/H3";
import P from "../atoms/P"

/**
 * Film Information component
 * @param props
 * @returns {JSX.Element}
 */
const FilmInformation = (props) => {
    return (<>
        <H3>Details</H3>
        <table><tbody>
            <FilmInformationItem title={"Original title:"} text={props.filmData['original_title']} />
            <FilmInformationItem title={"Release date:"} text={props.filmData['release_date']} />
            <FilmInformationItem title={"Rating:"} text={props.filmData['vote_average']} />
            <FilmInformationItem title={"Original language:"} text={props.filmData["original_language"]} />
            <FilmInformationItem title={"Runtime:"} text={`${props.filmData["runtime"]} minutes`} />
            <tr>
                <TD><P><b>Genre Tags:</b></P></TD>
                <TD><BubbleContainer>
                    {props.filmData.genres.map((genre) =>
                        <Bubble key={uid()}>{genre.name}</Bubble>)
                    }
                </BubbleContainer></TD>
            </tr>
        </tbody></table>
    </>
    )
}

export default FilmInformation