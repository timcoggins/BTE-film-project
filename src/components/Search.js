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
    width: 280px;
    height: 35px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    :focus::placeholder {
        color: transparent;
      }
    ::-webkit-input-placeholder {
        font-size: 15px;
`

const Button = styled.button`
    padding: 10px 30px;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
        background: #98BAE7; 
        color: black;
        padding: 12px 32px;
    }
    font-size: 15px;

` 
 
// Component

const Search = (props) => {

    const [searchInput, setSearchInput] = useState('')

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