/**
 * 
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 * 
 */


//import styled from 'styled-components'
import FilmInformationItem from './FilmInformationItem'


// Component

const FilmInformation = (props) => {
   console.log("hello")
   console.log(props.filmData.runtime)
    return (
        <div>
            {/* <FilmInformationItem title={"runtime"} text={props.filmData.title}/> */}
        </div>
    )
}

export default FilmInformation