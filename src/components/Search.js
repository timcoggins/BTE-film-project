/**
 * 
 * Main search for the home page
 * 
 */

import { useState } from 'react'
import styled from 'styled-components'

// Styles

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    gap: 20px;

    @media screen and (min-width:700px) {  
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const SearchFor =styled.input`
    width: 300px;
    // height: 35px;
    padding: 10px 10px;
    font-size: 15px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    :focus::placeholder {
        color: transparent;
    }
    ::-webkit-input-placeholder {
      font-size: 15px;
    }

    @media screen and (min-width:1141px) {
        font-size: 16px;
        padding: 13px 13px;
        ::-webkit-input-placeholder {
      font-size: 16px;
    }
    }

`

const Button = styled.button`
    padding: 8px 24px;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
        background: #98BAE7; 
        color: black;
    }
    font-size: 15px;

    @media screen and (min-width:1141px) {
        padding: 13px 70px;
        font-size: 16px;
    }
`

/**
 * Search component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Search = (props) => {

    // Declare state variable
    const [searchInput, setSearchInput] = useState('')

    // JSX

    return(
        <Container>
            <form>
                <SearchFor type="text" placeholder='Search for a Movie/TV Show' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </form>
            <Button onClick={() => props.searchHandler(searchInput)}>Search</Button>
        </Container>
    )
}

export default Search