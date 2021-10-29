/**
 * 
 * Shows an icon for a streaming service
 * 
 */
import WhereToWatch from "./WhereToWatch";



import styled from 'styled-components' 

// Styles

const IconImg = styled.img`
padding: 
  margin: 1em;
  border: 2px solid black;
  border-radius: 3px;
`; 

const IconName = styled.h6`

` 

// Component

export const WhereToWatchIcon = (props) => {
  return (
    <div>
      <IconImg width='40px'src={`http://image.tmdb.org/t/p/w500${props.data.logo_path}`} alt={props.data.provider_name}/>
    </div>
  );
};

export default WhereToWatchIcon
