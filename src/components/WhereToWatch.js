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

// Component

function WhereToWatch(props) {

    const [country, setCountry] = useState('BE')
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
            console.log(data.country_code)
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

            {/* Map through the data and display the icons */}
            {props.watchData && props.watchData[country][watchMethod].map(item =>
                <>
                    {/* Move to where to watch icon */}
                    <h3>{item.provider_name}</h3>
                    <img width='30px'src={`http://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.provider_name}/>
                    {/*<WhereToWatchIcon />*/}
                </>
            )}
        </div>
    )
}

export default WhereToWatch
