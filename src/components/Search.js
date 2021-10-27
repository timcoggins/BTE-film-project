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
    border: 1px solid black;
`

const Button = styled.button`
    width: 100px;
    border: 1px solid black;
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