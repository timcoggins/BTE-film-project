/**
 * 
 * Shows an icon for a streaming service
 * 
 */

import styled from 'styled-components' 

// Styles

const IconImg = styled.img`

` 

const IconName = styled.h6`

` 

// Component

export const WhereToWatchIcon = () => {
    return (
        <div>
         <IconImg src=""/>
         <IconName>Netflix</IconName>
        </div>
    )
}

export default WhereToWatchIcon
