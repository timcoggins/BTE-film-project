/**
 *
 * Displays all the info about 1 particular movie
 *
 */

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios";
import styled from 'styled-components'

import WhereToWatch from './WhereToWatch'
import Trailer from './Trailer'
import FilmInformation from './FilmInformation'
import Synopsis from './Synopsis'
import Carousel from './Carousel'


// Styles

const InfoImage = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
`

const FilmInfo = styled.div`
  padding: 0 10px;
`

const TitleBar = styled.div`
  display: flex;
  place-content: space-between;
  align-items: center;
  h1 {
    margin: 10px 0;
  }
  p {
    background: #fe8b01;
    border-radius: 50%;
    padding: 12px;
    color: white;
  }
`

// Component

const InfoPage = () => {

    // Get the film ID from the router params
    const { id } = useParams();

    // State variable to store the general film data
    const [filmData, setFilmData] = useState();

    // State variable to store where to watch data
    const [watchData, setWatchData] = useState();

    // State variable to store similar movies
    const [similarFilmData, setSimilarFilmData] = useState();

    // API Calls
    useEffect(()=> {

        // TODO Better error handling

        // Get the general film data from the API when the page loads, use the id from the params
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=f60b20c74e47d524d562b3d0b29f6aeb`)
            .then(response => setFilmData(response.data))
            .catch(error => console.log(error))

        // Get the where to watch data
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=f60b20c74e47d524d562b3d0b29f6aeb`)
            .then(response => setWatchData(response.data.results))
            .catch(error => console.log(error))

        // Get the where to watch data
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f60b20c74e47d524d562b3d0b29f6aeb`)
            .then(response => setSimilarFilmData(response.data.results))
            .catch(error => console.log(error))

    }, [id])

    // For development to see the incoming data
    useEffect(() => console.log(filmData), [filmData]);
    useEffect(() => console.log(watchData), [watchData]);
    useEffect(() => console.log(similarFilmData), [similarFilmData]);

    // JSX Rendering
    return(
        <>
            {/* Only display the information once the data has arrived */}
            {filmData && <FilmInfo>
                 <TitleBar>
                     <h1>{filmData.title}</h1>
                    <p>{filmData.vote_average}</p>
                 </TitleBar>
                <p>Released: {filmData.release_date}</p>
                <InfoImage src={`http://image.tmdb.org/t/p/w500${filmData.backdrop_path}`} alt={filmData.title}/>
                <p>{filmData.overview}</p>
            </FilmInfo> }

            <WhereToWatch watchData={watchData} />
            <Trailer />
            <FilmInformation filmData={filmData}/>
            <Synopsis />
            <Carousel />
        </>
    )
}
export default InfoPage