/**
 * 
 * Allows the user to see based on their country, where the particular show they are looking for can be found
 * 
 */

import WhereToWatchCountry from "./WhereToWatchCountry"
import WhereToWatchIcon from "./WhereToWatchIcon"
import WhereToWatchMethod from "./WhereToWatchMethod"

// Component

function WhereToWatch() {
    return (
        <div>
            <WhereToWatchCountry />
            <WhereToWatchMethod />
            <WhereToWatchIcon />
            <WhereToWatchIcon />
        </div>
    )
}

export default WhereToWatch
