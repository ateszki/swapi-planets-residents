import React, { useContext, useEffect } from 'react';

import PlanetItem from './PlanetItem';
import Filter from './Filter';
import Spinner from '../layouts/Spinner';

import SwapiContext from '../../context/swapi/swapiContext'; 


const Planets = () => {
    const swapiContext = useContext(SwapiContext);
    const { getPlanets, planets, filter, loading, clearPlanet } = swapiContext;

    
    useEffect( () => {
        // call the planet list only once
        if (planets.length === 0)  getPlanets();
        clearPlanet();
        // eslint-disable-next-line
    },[] )

    if (loading.planets) return <Spinner />;
    
    return (
        <div className="container mx-auto">
            <Filter />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                { planets.filter(planet => planet.name.toLowerCase().indexOf(filter) > -1).map((planet, index) => (<PlanetItem key={index} planet={planet} />)) }
            </div>
        </div>
    )
}

export default Planets
