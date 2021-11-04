/**
 * 
 * Shows an icon for a streaming service
 * 
 */

// Imports

import styled from 'styled-components'

// Styles

const IconImg = styled.img`

  border: 1px solid black;
  border-radius: 3px;
`; 

/**
 * Component to draw the where to watch icon
 * @param props
 * @returns {JSX.Element}
 */

export const WhereToWatchIcon = (props) => {
  return (
    <div>
      <IconImg width='40px'src={`http://image.tmdb.org/t/p/w500${props.data.logo_path}`} alt={props.data.provider_name}/>
    </div>
  );
};

export default WhereToWatchIcon
