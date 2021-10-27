/**
 * 
 * Allows the user to select which country they live in
 * 
 */

import styled from 'styled-components'



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
          <option>Spain</option>
          <option>France</option>
           <option>Germany</option>
         </DisplayOptions>
        </Container>
    )

}



export default WhereToWatchCountry
{/* <DisplayOptions >
                <option >Spain</option>
                <option >Spain</option>
                <option>Spain</option>
                <option>Spain</option>
            </DisplayOptions> */}