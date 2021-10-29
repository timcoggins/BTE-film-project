/**
 * 
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 * 
 */


//import styled from 'styled-components'
import FilmInformationItem from './FilmInformationItem'


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



        </div>
    )
}

export default FilmInformation