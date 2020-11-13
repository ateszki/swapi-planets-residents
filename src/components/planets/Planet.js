import React, { useEffect, useContext } from 'react';
import Residents from '../residents/Residents';
import SwapiContext from '../../context/swapi/swapiContext'; 
import Spinner from '../layouts/Spinner';
import Breadcrumb from '../layouts/Breadcrumb';


const Planet = ({ match }) => {

    const swapiContext = useContext(SwapiContext);
    const { getPlanet, getPlanets, planets, planet, loading, clearResident } = swapiContext;
    useEffect( () => {
        if (planets.length === 0) getPlanets();
        // eslint-disable-next-line
    },[] )
    useEffect( () => {
        if (planets.length > 0) getPlanet(match.params.planet_slug);
        clearResident();
        // eslint-disable-next-line
    },[planets] )

     
    if (loading) return <Spinner />;
    const {climate,terrain, gravity, diameter, population } = planet;
    return (
        <div>
            <Breadcrumb  />
            <div className="container mx-auto">
                <h1 className="mx-2 text-6xl bold">{planet.name}</h1>
                <ul className="mx-2">
                    <li><b>Climate: </b>{climate}</li>
                    <li><b>Terrain: </b>{terrain}</li>
                    <li><b>Gravity: </b>{gravity}</li>
                    <li><b>Diameter: </b>{diameter}</li>
                    <li><b>Population: </b>{population}</li>
                </ul>
            </div>
            <Residents />
        </div>
    )
}

export default Planet
