/**
 * 
 * Allows the user to select which country they live in
 * 
 */

import styled from 'styled-components'
import {useState, useEffect } from 'react'
import axios from 'axios';



// Styles
const Container =styled.div`
display: flex;
align-items: center;
justify-content: space-around;

` 
const Title = styled.h3`

` 
const DisplayOptions = styled.select`
padding:5px 90px 5px 0px;
font-size: 15px;
text-align: left;
` 

// Component

const WhereToWatchCountry = () => {
    

    return (
        <Container>
            <Title>Where to watch</Title>
        <DisplayOptions> 
          <option>Belgium</option>  
          <option>Spain</option>
          <option>France</option>
           <option>Germany</option>
         </DisplayOptions>
        </Container>
    )

}



export default WhereToWatchCountry
