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
`

const Button = styled.button`
    padding: 8px 25px;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
        background: #98BAE7; 
        color: black;
    }
    font-size: 15px;
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

    return (
      <Container>
        <form>
          <SearchFor
            type="text"
            placeholder="Search for a Movie/Series/TV Show"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        <Button onClick={() => props.searchHandler(searchInput)}>Search</Button>
    
      </Container>
    );
}

export default Search