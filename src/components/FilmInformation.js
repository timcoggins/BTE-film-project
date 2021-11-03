/**
 * 
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 * 
 */


//import styled from 'styled-components'
import FilmInformationItem from './FilmInformationItem'
import styled from 'styled-components'
// styles

const Genre = styled.b`
padding-left: 10px;
 font-size: 15px;
 
`
const GenresList = styled.ul`
font-size: 14px;
line-height: 1.5 ;

` 

// Component

const FilmInformation = (props) => {
    console.log("pizza", props)
    return (
        <div>
            <FilmInformationItem title={"Original title:"} text={props.filmData['original_title']} />
            <FilmInformationItem title={"Release date:"} text={props.filmData['release_date']} />
            <FilmInformationItem title={"Rating:"} text={props.filmData['vote_average']} />
            <FilmInformationItem title={"Popularity:"} text={props.filmData['popularity']} />
            <FilmInformationItem title={"Original language:"} text={props.filmData["original_language"]} />
            <FilmInformationItem title={"Runtime:"} text={props.filmData["runtime"]} />
            <p><Genre>Genre:</Genre></p><GenresList>{props.filmData.genres.map((genre) => 
            <li>{genre.name}</li>)}</GenresList>
        </div>
    )
}



export default FilmInformation