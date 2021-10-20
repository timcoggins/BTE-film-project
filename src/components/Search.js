/**
 * 
 * Main search for the home page
 * 
 */

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

const Search = () => {
    return(
        <Container>
            <form>
                <SearchFor type="text" placeholder='Search for a Movie/TV Show'/>
                
            </form>
            <Button>Search</Button>
        </Container>
    )
}

export default Search