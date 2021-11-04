/**
 * 
 * Allows the user to select which country they live in
 * 
 */

import styled from 'styled-components'
import {useState, useEffect} from 'react'
import { uid } from 'uid'

// Styles

const Container =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
` 
const Title = styled.h3`

` 
const DisplayOptions = styled.select`
    padding:5px 90px 5px 0px;
    font-size: 15px;
    text-align: left;
`

// TODO Autofill the list of countries

const listOfCountries = [
    {
        name: 'Belgium',
        code: "BE"
    },
    {
        name: 'Spain',
        code: "ES"
    },
    {
        name: 'France',
        code: "FR"
    },
    {
        name: 'Germany',
        code: "DE"
    }
];


/**
 * Where to watch country component
 * @param props
 * @returns {JSX.Element}
 */
const WhereToWatchCountry = (props) => {

    // Declare the state variable for the select
    const [selectValue, setSelectValue] = useState(props.country)

    // When the country finder updates in the parent, select the country automatically
    useEffect(() => setSelectValue(props.country), [props.country])

    /**
     * Handles the select element for choosing a country
     * @param e
     */
    const selectHandler = (e) => {
            setSelectValue(e.target.value)
            props.setCountry(e.target.value)
    }

    // JSX

    return (
        <Container>
            <Title>Where to watch</Title>
            <DisplayOptions value={selectValue} onChange={selectHandler}>
                {listOfCountries.map(country => <option key={uid()} value={country.code}>{country.name}</option>)}
            </DisplayOptions>
        </Container>
    )
}

export default WhereToWatchCountry
