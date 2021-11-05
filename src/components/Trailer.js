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

const TrailerContainer = styled.div`
`;

const TrailerIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  @media (min-width: 1025px);
`;

/**
 * Component that shows the trailer
 * @returns {JSX.Element}
 */

const Trailer = () => {

    // Get the movie ID from the URL params
    const { id } = useParams();

    // State variable to store the trailer data
    const [trailerData, setTrailerData] = useState()


    /**
     * Get the data when the component loads
     */
    // TODO Error Handling
    useEffect(() => {
        // URL for the API endpoint
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f60b20c74e47d524d562b3d0b29f6aeb`;
        // Fetch the trailer data
        axios
            .get(url)
            .then((response) => checkTrailer(response.data))
            .catch((error) => console.log(error));
    }, [id])

    /**
     * Checks if the trailer exists and is on youtube
     * @param data
     */
    const checkTrailer = (data) => {
        if (data.results[0].site === "YouTube") setTrailerData(data);
    }

    // JSX

    return (
        <TrailerContainer>
            <h3>Trailer</h3>
                {trailerData && (
                <TrailerIframe
                    src={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            )}
        </TrailerContainer>
    );
}

export default Trailer;
