/**
 * 
 * Home page where the search and popular movies/tv are
 * 
 */

import axios from 'axios'
import { useState, useEffect } from 'react'
import HomePageImage from "./HomePageImage"
import Search from "./Search"
import Carousel from "./Carousel"

import styled from 'styled-components'

// Styles

const HomeContainer = styled.div`
    margin: 0 auto;
`

const SearchCard = styled.div`
  margin: 20px;
  border: 1px gainsboro solid;
  img {
    width: 100%;
  }
`

// Components

const HomePage = () => {

    // Setup a state variable to store the search results
    const [searchData, setSearchData] = useState([])

    // Handler for when the user presses the search button
    const searchHandler = (query) => {

        // Check to see if the user search box is empty, exit the function if it is
        if(query === '') {
            console.log('Search query was empty')   // TODO Make this into something more useful
            return
        }

        // Encode the search query to encodes the spaces, special characters etc
        const encoded = encodeURI(query);

        // Get the data the with axios
        // TODO Better error handling
        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${encoded}&api_key=f60b20c74e47d524d562b3d0b29f6aeb`)
            .then(response => setSearchData([...response.data.results]))
            .catch(error => console.log(error))
    }

    // Used for development to see the data as it comes in
    useEffect(()=> console.log(searchData), [searchData])


    return(
            <HomeContainer>

                {/* Show the home page images but if the user has search results don't display it */}
                {searchData.length === 0 ? <HomePageImage src='http://placekitten.com/200/300'/> : null}

                {/* The search component for finding a movie */}
                <Search searchHandler={searchHandler} />

                {/* Display each result on a card once we have the results data, if there is no data show the carousel */}
                {searchData.length !== 0
                    ? searchData.map(item =>
                        <SearchCard>
                            <h3>{item.title}</h3>
                            <p>{item.release_date}</p>
                            <p>More Info id: {item.id}</p>
                            <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                        </SearchCard>)
                    : <Carousel/>
                }

            </HomeContainer>
    )
}
export default HomePage