import React from 'react';
import DarthVader from '../../assets/images/darth-vader-svgrepo-com.svg';

const NotFound = () => {
    return (
        <div className="container mx-auto text-center h-screen">
            <img src={DarthVader} className="h-64 w-64 mx-auto my-20" alt="Page not found" />
            <h1 className="text-4xl">404 Page Not Found</h1>
            <p>Come to the dark side</p>
        </div>
    )
}

export default NotFound
