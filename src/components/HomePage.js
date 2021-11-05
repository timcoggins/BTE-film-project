/**
 * 
 * Home page where the search and popular movies/tv are
 * 
 */
import { uid } from 'uid';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

//import HomePageImage from "./HomePageImage"
import Search from "./Search"
import Carousel from "./Carousel"

// Styles

const HomeContainer = styled.div`
  margin: 0 auto;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='200' stroke-opacity='0.18' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg transform='scale(0.946)' style='transform-origin:center'%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(-105.6 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%2327002B' href='%23a' transform='rotate(-39.6 0 0) scale(0.604)'/%3E%3Cuse stroke='%23340331' href='%23a' transform='rotate(-33 0 0) scale(0.67)'/%3E%3Cuse stroke='%23420436' href='%23a' transform='rotate(-26.4 0 0) scale(0.736)'/%3E%3Cuse stroke='%2351063b' href='%23a' transform='rotate(-19.8 0 0) scale(0.802)'/%3E%3Cuse stroke='%235f093f' href='%23a' transform='rotate(-13.2 0 0) scale(0.868)'/%3E%3Cuse stroke='%236e0d42' href='%23a' transform='rotate(-6.6 0 0) scale(0.934)'/%3E%3Cuse stroke='%237c1244' href='%23a'/%3E%3Cuse stroke='%238b1945' href='%23a' transform='rotate(6.6 0 0) scale(1.066)'/%3E%3Cuse stroke='%23992045' href='%23a' transform='rotate(13.2 0 0) scale(1.132)'/%3E%3Cuse stroke='%23a62945' href='%23a' transform='rotate(19.8 0 0) scale(1.198)'/%3E%3Cuse stroke='%23b33244' href='%23a' transform='rotate(26.4 0 0) scale(1.264)'/%3E%3Cuse stroke='%23c03c42' href='%23a' transform='rotate(33 0 0) scale(1.33)'/%3E%3Cuse stroke='%23cb4740' href='%23a' transform='rotate(39.6 0 0) scale(1.396)'/%3E%3Cuse stroke='%23d5523c' href='%23a' transform='rotate(46.2 0 0) scale(1.462)'/%3E%3Cuse stroke='%23df5f39' href='%23a' transform='rotate(52.8 0 0) scale(1.528)'/%3E%3Cuse stroke='%23e76b34' href='%23a' transform='rotate(59.4 0 0) scale(1.594)'/%3E%3Cuse stroke='%23ef792f' href='%23a' transform='rotate(66 0 0) scale(1.66)'/%3E%3Cuse stroke='%23f58729' href='%23a' transform='rotate(72.6 0 0) scale(1.726)'/%3E%3Cuse stroke='%23fa9522' href='%23a' transform='rotate(79.2 0 0) scale(1.792)'/%3E%3Cuse stroke='%23fda31a' href='%23a' transform='rotate(85.8 0 0) scale(1.858)'/%3E%3Cuse stroke='%23ffb210' href='%23a' transform='rotate(92.4 0 0) scale(1.924)'/%3E%3Cuse stroke='%23ffc106' href='%23a' transform='rotate(99 0 0) scale(1.99)'/%3E%3Cuse stroke='%23FFD000' href='%23a' transform='rotate(105.6 0 0) scale(2.056)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

const SearchCard = styled.div`
  margin: 20px;
  border: 1px gainsboro solid;
  background: white;
  border-radius: 4px;
  padding: 10px;
  img {
    width: 100%;
  }
  p {
    font-size: 14px;
    margin: 5px 0;
  }
`

const CardHeader = styled.div`
  display: flex;
  place-content: space-between;
  align-items: center;
  h3 {
    margin: 10px 0;
    color: black;
  }
  p {
    background: #fe8b01;
    border-radius: 50%;
    padding: 12px;
    color: white;
  }
`

/**
 * Home page component
 * @returns {JSX.Element}
 */

const HomePage = () => {

    // Setup a state variable to store the search results
    const [searchData, setSearchData] = useState([])
    const [popularData, setPopularData] = useState([])

    /**
     * Handler for when the user search for something
     * @param query
     */
    const searchHandler = (query) => {

        // Check to see if the user search box is empty, exit the function if it is
        if(query === '') {
            console.log('Search query was empty')   // TODO Make this into something more useful
            return;
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
    // useEffect(()=> console.log(searchData), [searchData])

    // Get the data for trending movies of the day
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=f60b20c74e47d524d562b3d0b29f6aeb`)
            .then(response => setPopularData(response.data.results))
            .catch(error => console.log(error))
    }, [])

    // JSX

    return (
      <HomeContainer>
        {/* Show the home page images but if the user has search results don't display it */}
        {/*searchData.length === 0 ? <HomePageImage src='http://placekitten.com/200/300'/> : null*/}

        {/* The search component for finding a movie */}
        <Search searchHandler={searchHandler} />

        {/* TODO Make this into a separate component */}
        {/* Display each result on a card once we have the results data, if there is no data show the carousel */}
        {searchData.length !== 0 ? (
          searchData.map((item) => (
            <SearchCard key={uid()}>
              <CardHeader>
                  <h3>
                    <Link to={`/film/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p>{item.vote_average < 10 ? item.vote_average.toFixed(1) : item.vote_average}</p>
              </CardHeader>
              <p>{item.release_date}</p>
              <img
                src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
            </SearchCard>
          ))
        ) : (
          <Carousel data={popularData}/>
        )}
      </HomeContainer>
    );
}
export default HomePage