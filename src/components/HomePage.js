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
import formatDate from '../utils/formatDate'

//import HomePageImage from "./HomePageImage"
import Search from "./Search"
import Carousel from "./Carousel"

// Styles

const HomeContainer = styled.div`
  margin: 0 auto;
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

const CardContainer = styled.div`
@media screen and (min-width:500px) {
     display: flex;
    justify-content: space-around;
     flex-direction: row;
     flex-wrap: wrap;
`
/**
 * Home page component
 * @returns {JSX.Element}
 */

const HomePage = () => {

    // Setup a state variable to store the search results
    const [searchData, setSearchData] = useState([])
    const [tvData, setTvData] = useState([])
    const [popularData, setPopularData] = useState([])
    const [toggleTV, setToggleTV] = useState(false)

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
      
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?query=${encoded}&api_key=f60b20c74e47d524d562b3d0b29f6aeb`
        )
        .then((response) => setTvData([...response.data.results]))
        .catch((error) => console.log(error));
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


        <CardContainer>
        <button onClick={() => setToggleTV(!toggleTV)}>toggle
        </button>

        {/* TODO Make this into a separate component */}
        {/* Display each result on a card once we have the results data, if there is no data show the carousel */}
      
        {!toggleTV && searchData.map(item => 
            <SearchCard key={uid()}>

              <CardHeader>
                  <h3>
                    <Link to={`/film/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p>{item.vote_average < 10 ? item.vote_average.toFixed(1) : item.vote_average}</p>
              </CardHeader>
              <p>Released: {formatDate(item.release_date)}</p>
              <img
                src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
            </SearchCard>
          ))
        ) : (
          <Carousel data={popularData}/>
        )}
        </CardContainer>


        {toggleTV && tvData.map(item => 
            <SearchCard key={uid()}>
              <CardHeader>
                <h3>
                  <Link to={`/tv/${item.id}`}>{item.name}</Link>
                </h3>
                <p>{item.vote_average}</p>
              </CardHeader>
              <p>{item.release_date}</p>
              <img
                src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.name}
              />
            </SearchCard>
          )}

      <Carousel data={popularData} />
      </HomeContainer>
    );
}
export default HomePage