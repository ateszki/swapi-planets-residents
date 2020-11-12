import React from 'react';
import DarthVader from '../../assets/darth-vader-svgrepo-com.svg';

const NotFound = () => {
    return (
        <div>
            <img src={DarthVader} alt="Page not found" />
            <h1>404 Not Found</h1>
            <p>The page was not found</p>
        </div>
    )
}

export default NotFound
