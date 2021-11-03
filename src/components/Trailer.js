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
width: 360px;
`

// Component

const Trailer = () => {

    const { id } = useParams();
    const [trailerData, setTrailerData] = useState()
    const url =
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f60b20c74e47d524d562b3d0b29f6aeb`;

    const checkTrailer = (data) => {
        if (data.results[0].site === "YouTube") {
            console.log("video is on youtube")
             setTrailerData(data);
        } 
    }
    

    useEffect(() => {
        axios
            .get(url)
            .then((response) => checkTrailer(response.data)) 
            .catch((error) => console.log(error));
    }, [])


    useEffect(() => console.log(trailerData), [trailerData]);
 
    return (
      <>
        Trailer
        <VideoLink src="" />
            {trailerData && <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>}
      </>
    );
}

export default Trailer;
