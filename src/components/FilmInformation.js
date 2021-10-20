/**
 * 
 * Calls the subcomponent FilmInformationItem for each thing like genre, rating, blah
 * 
 */

//import styled from 'styled-components'
import FilmInformationItem from './FilmInformationItem'

// Component

export const FilmInformation = () => {
    return (
        <div>
            <FilmInformationItem />
            <FilmInformationItem />
            <FilmInformationItem />
            <FilmInformationItem />
            <FilmInformationItem />
        </div>
    )
}

export default FilmInformation