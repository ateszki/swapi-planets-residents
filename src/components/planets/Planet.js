import React, { useEffect, useContext } from 'react';
import Residents from '../residents/Residents';
import SwapiContext from '../../context/swapi/swapiContext'; 
import Spinner from '../layouts/Spinner';

function Planet({ match }) {

    const swapiContext = useContext(SwapiContext);
    const { getPlanet, getPlanets, planets, planet, loading } = swapiContext;
    useEffect( () => {
        if (planets.length === 0) getPlanets();
        // eslint-disable-next-line
    },[] )
    useEffect( () => {
        if (planets.length > 0) getPlanet(match.params.planet_slug);
        // eslint-disable-next-line
    },[loading] )

     
    if (loading) return <Spinner />;
        
    return (
        <div>
            <h1>{planet.name}</h1>
            <h2>Residents</h2>
            <Residents />
        </div>
    )
}

export default Planet
