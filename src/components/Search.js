/**
 * 
 * Main search for the home page
 * 
 */

import { useState } from 'react'
import styled from 'styled-components'

// Styles

const SearchContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap: 20px;

    @media screen and (min-width:700px) {  
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const SearchInput =styled.input`
    width: 300px;
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
    padding: 8px 24px`;

const SearchButton = styled.input`
    width: 120px;
    padding: 8px 25px;
  
    border: 1px solid black;
    border-radius: 10px;
    font-size: 15px;
    color: black;
  
    :hover {
        background: #98BAE7;
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

    // Declare state variable to store the user input
    const [searchInput, setSearchInput] = useState('')

    // JSX
    return(
        <SearchContainerForm onSubmit={(e) => {
            e.preventDefault();
            props.searchHandler(searchInput)
        }}>
            <SearchInput type="text" placeholder='Search for a Movie/TV Show' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <SearchButton type="submit" value={'Search'} />
        </SearchContainerForm>
    )
}

export default Search