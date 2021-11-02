/**
 * 
 * Shows the trailer for a movie
 * 
 */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import styled from 'styled-components' 

// Style

const VideoLink = styled.img`

`

// Component

const Trailer = () => {

    const { id } = useParams();
    const [trailerData, setTrailerData] = useState()
    const url =
      "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US"

    useEffect(() => {
        axios
            .get(url)
            .then((response) => setTrailerData(response.data))
            .catch((error) => console.log(error));
    }, [id])


    useEffect(() => console.log(trailerData), [trailerData]);

    return (
        <>
            Trailer
             <VideoLink src=""/>
        </>
    )
}

export default Trailer;
