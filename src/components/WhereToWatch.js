/**
 * 
 * Allows the user to see based on their country, where the particular show they are looking for can be found
 * 
 */

import WhereToWatchCountry from "./WhereToWatchCountry"
import WhereToWatchIcon from "./WhereToWatchIcon"
import WhereToWatchMethod from "./WhereToWatchMethod"

import { useState, useEffect } from 'react'
import axios from "axios";
import styled from 'styled-components'

// Styles

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  padding: 20px;
  place-content: center;
`

// Component

function WhereToWatch(props) {

    const [country, setCountry] = useState('DE')
    const [watchMethod, setWatchMethod] = useState('flatrate')

    /**
     * Gets the users country using the ipapi API
     * More info at https://ipapi.co/
     */
    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            // Put the country code into the state for country
            setCountry(data.country_code)
            console.log(`You are in ${data.country_code}`)
        }).catch((error) => {
            // Log any errors
            console.log(error);
        });
    };

    // Get the users location when the component mounts

    useEffect(() => {
        getGeoInfo()
    }, [])


    // JSX

    return (
        <div>
            {/* Pass the states country and watchMethod as props to these components */}
            <WhereToWatchCountry country={country} setCountry={setCountry}/>
            <WhereToWatchMethod watchMethod={watchMethod} setWatchMethod={setWatchMethod}/>

            <IconContainer>
                {/* Map through the data and display the icons */}
                { props.watchData && (country in props.watchData) && props.watchData[country][watchMethod]?.map(item =>
                    <>

                        {/* Move to where to watch icon */}
                        {/* <img width='50px'src={`http://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.provider_name}/>*/}
                        <WhereToWatchIcon data={item}/>

                    </>
                )}
            </IconContainer>
        </div>
    )
}

export default WhereToWatch
