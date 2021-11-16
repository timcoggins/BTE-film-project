/**
 * FilmInformation.js
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 */
import { uid } from 'uid'
import FilmInformationItem from './FilmInformationItem'
import Bubble from "../atoms/Bubble";
import BubbleContainer from "../atoms/BubbleContainer";
import H4 from '../atoms/H4'
import TD from '../atoms/TD'
import H3 from "../atoms/H3";

/**
 * Film Information component
 * @param props
 * @returns {JSX.Element}
 */
const FilmInformation = (props) => {

    return (<>
            <H3>Details</H3>
        <table>
            <FilmInformationItem title={"Original title:"} text={props.filmData['original_title']} />
            <FilmInformationItem title={"Release date:"} text={props.filmData['release_date']} />
            <FilmInformationItem title={"Rating:"} text={props.filmData['vote_average']} />
            <FilmInformationItem title={"Original language:"} text={props.filmData["original_language"]} />
            <FilmInformationItem title={"Runtime:"} text={`${props.filmData["runtime"]} minutes`} />
 
            {/* Director: 
        {props.credits && props.credits.crew.find((person) => person.job === "Director" )
        .map((person) => <p>{person.name}</p>)} */}

            <tr>
                <TD><H4>Genre Tags:</H4></TD>
                <TD><BubbleContainer>
                    {props.filmData.genres.map((genre) =>
                        <Bubble key={uid()}>{genre.name}</Bubble>)
                    }
                </BubbleContainer></TD>
            </tr>
        </table>
        </>
    )
}

export default FilmInformation