import React, { useEffect, useContext } from 'react';
import Residents from '../residents/Residents';
import SwapiContext from '../../context/swapi/swapiContext'; 
import Spinner from '../layouts/Spinner';
import Breadcrumb from '../layouts/Breadcrumb';
import NotFound from '../pages/NotFound';


const Planet = ({ match }) => {

    const swapiContext = useContext(SwapiContext);
    const { getPlanet, getPlanets, getResidents, residents, planets, planet, loading, clearResident } = swapiContext;
    useEffect( () => {
        if (planets.length === 0) getPlanets();
        // eslint-disable-next-line
    },[] )
    useEffect( () => {
        if (planets.length > 0) {
            getPlanet(match.params.planet_slug);
            getResidents(match.params.planet_slug);
            clearResident();
        }
        // eslint-disable-next-line
    },[planets] )

     
    if (loading.planet) return <Spinner />;

    if(typeof planet === "undefined") return <NotFound />

    const {climate,terrain, gravity, diameter, population } = planet;
    return (
        <div>
            <Breadcrumb  />
            <div className="container mx-auto">
                <h1 className="mx-2 text-6xl bold border-b-2 border-black my-6">{planet.name} ({residents.length})</h1>
                <div className="md:flex">
                    <div className="md:flex-none md:w-40 md:mr-4 mx-2 mb-4">
                        <ul className="mx-2">
                            <li><b>Climate: </b>{climate}</li>
                            <li><b>Terrain: </b>{terrain}</li>
                            <li><b>Gravity: </b>{gravity}</li>
                            <li><b>Diameter: </b>{diameter}</li>
                            <li><b>Population: </b>{population}</li>
                        </ul>
                    </div>
                    <div className="md:flex-1">
                        <Residents />
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Planet
