import React, { useContext, useEffect } from 'react'
import Spinner from '../layouts/Spinner';
import Planets from '../planets/Planets';
import Breadcrumb from '../layouts/Breadcrumb';
import SwapiContext from '../../context/swapi/swapiContext'; 

function Home() {
    const swapiContext = useContext(SwapiContext);
    const { loading, getPlanets, planets } = swapiContext;

    
    useEffect( () => {
        // call the planet list only once
        if (planets.length === 0)  getPlanets();
        // eslint-disable-next-line
    },[] )

    
    if (loading) return <Spinner />;
    return (
        <div>
            <Breadcrumb  />
            <Planets />
        </div>
    )
}

export default Home
