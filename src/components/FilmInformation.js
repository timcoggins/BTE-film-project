/**
 * 
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 * 
 */

import FilmInformationItem from './FilmInformationItem'
import styled from 'styled-components'
import { uid } from 'uid'

// styles

const Genre = styled.h4`
    padding-left: 10px;
    font-size: 15px;
`

const BubbleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
`

const Bubble = styled.span`
    background-color: burlywood;
    border-radius: 4px;
    color: white;
    padding: 5px;
    font-size: 12px;
    margin: 2px;
`

/**
 * Film Information component
 * @param props
 * @returns {JSX.Element}
 */

const FilmInformation = (props) => {
    return (
        <div>
            <FilmInformationItem title={"Original title:"} text={props.filmData['original_title']} />
            <FilmInformationItem title={"Release date:"} text={props.filmData['release_date']} />
            <FilmInformationItem title={"Rating:"} text={props.filmData['vote_average']} />
            <FilmInformationItem title={"Popularity:"} text={props.filmData['popularity']} />
            <FilmInformationItem title={"Original language:"} text={props.filmData["original_language"]} />
            <FilmInformationItem title={"Runtime:"} text={`${props.filmData["runtime"]} minutes`} />
            {/*<p><Genre>Genre:</Genre></p><GenresList>{props.filmData.genres.map((genre) =>
            <li>{genre.name}</li>)}</GenresList>*/}
            <Genre>Genre Tags:</Genre>
            <BubbleContainer>
                {props.filmData.genres.map((genre) =>
                <Bubble key={uid()}>{genre.name}</Bubble>)
                }
            </BubbleContainer>
        </div>
    )
}



export default FilmInformation