import React, { useContext } from 'react';

import PlanetItem from './PlanetItem';

import SwapiContext from '../../context/swapi/swapiContext'; 


const Planets = () => {
    const swapiContext = useContext(SwapiContext);
    const { planets } = swapiContext;
    return (
        <div>
            {planets.map((planet, index) => (<PlanetItem key={index} planet={planet} />))}
            
        </div>
    )
}

export default Planets
