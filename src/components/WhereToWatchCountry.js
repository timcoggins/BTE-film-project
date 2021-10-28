/**
 * 
 * Allows the user to select which country they live in
 * 
 */

import styled from 'styled-components'
import {useState} from 'react'


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



// Component

const WhereToWatchCountry = (props) => {
const [selectValue, setSelectValue] = useState(props.country)
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
    ]

        const selectHandler = (e) => {
            console.log(e.target.value)
            setSelectValue(e.target.value)
            props.setCountry(e.target.value)
        }

    return (
        <Container>
            <Title>Where to watch</Title>
            <DisplayOptions value={selectValue} onChange={selectHandler}>
                {listOfCountries.map(country => <option value={country.code}>{country.name}</option>)}
            </DisplayOptions>
        </Container>
    )

}



export default WhereToWatchCountry
