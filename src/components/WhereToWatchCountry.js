/**
 * 
 * Allows the user to select which country they live in
 * 
 */

import styled from 'styled-components'
import countryCodes from "../assets/countryCodes";
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
    width: 100%;
`

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
                {countryCodes.map(country => <option key={uid()} value={country.iso_3166_1}>{country.native_name}</option>)}
            </DisplayOptions>
        </Container>
    )
}

export default WhereToWatchCountry
