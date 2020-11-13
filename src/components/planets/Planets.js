import React, { useContext } from 'react';

import PlanetItem from './PlanetItem';
import Filter from './Filter';

import SwapiContext from '../../context/swapi/swapiContext'; 


const Planets = () => {
    const swapiContext = useContext(SwapiContext);
    const { planets, filter } = swapiContext;
    
    return (
        <div className="container mx-auto">
            <Filter />
            <table className="table-auto w-full">
            <thead>
                <tr>
                <th className="px-4 py-2 w-4/12 text-left">Planet</th>
                <th className="px-4 py-2 w-3/12 text-left hidden lg:table-cell">Climate</th>
                <th className="px-4 py-2 w-3/12 text-left hidden lg:table-cell">Terrain</th>
                <th className="px-4 py-2 w-2/12 ">Residents</th>
                </tr>
            </thead>
            <tbody>
                { planets.filter(planet => planet.name.toLowerCase().indexOf(filter) > -1).map((planet, index) => (<PlanetItem key={index} index={index} planet={planet} />)) }
            </tbody>
            </table>
            
        </div>
    )
}

export default Planets
