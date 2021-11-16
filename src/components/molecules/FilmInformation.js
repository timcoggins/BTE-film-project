/**
 * FilmInformation.js
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 */
import {useState, useEffect} from 'react'
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

    const [director, setDirector] = useState();

    useEffect(() => {
        if(props.credits) {
            let crew = props.credits.crew.find((person) => person.job === "Director" )
            setDirector(crew.name)
        }
    }, [props.credits])
    

    return (<>
        <H3>Details</H3>

        <table><tbody>
            <FilmInformationItem title={"Title:"} text={props.filmData['original_title']} />
            <FilmInformationItem title={"Tagline:"} text={props.filmData['tagline']} />
            <FilmInformationItem title={"Status:"} text={props.filmData['status']} />
            <FilmInformationItem title={"Release Date:"} text={props.filmData['release_date']} />
            <FilmInformationItem title={"Website:"} text={props.filmData['homepage']} />
            <FilmInformationItem title={"Runtime:"} text={`${props.filmData["runtime"]} minutes`} />
            <FilmInformationItem title={"Rating:"} text={`${props.filmData['vote_average']}/10`} />
            <FilmInformationItem title={"Votes"} text={`${props.filmData['vote_count']}`} />
            <FilmInformationItem title={"Budget:"} text={`$${props.filmData['budget']}`} />
            <FilmInformationItem title={"Revenue:"} text={`$${props.filmData['revenue']}`} />
            <FilmInformationItem title={"Original Language:"} text={props.filmData["original_language"]} />
            <FilmInformationItem title={'Director'} text={director} />

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