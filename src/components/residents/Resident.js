import React, {useContext, useEffect} from 'react';
import SwapiContext from '../../context/swapi/swapiContext'; 
import Spinner from '../layouts/Spinner';
import NotFound from '../pages/NotFound';
import Breadcrumb from '../layouts/Breadcrumb';

const Resident = ({ match }) => {
    const swapiContext = useContext(SwapiContext);
    const { getPlanets, getPlanet, getResidents, clearResident, resident, planets, loading } = swapiContext;

    
    useEffect( () => {
        if (planets.length === 0) getPlanets();
        // eslint-disable-next-line
    },[] )
    useEffect( () => {
        if (planets.length > 0) {
            getPlanet(match.params.planet_slug);
            getResidents(match.params.planet_slug,match.params.resident_slug);
            clearResident();
        }
        // eslint-disable-next-line
    },[planets] );

    if(loading.residents || loading.planets || loading.planet) return <Spinner />

    if(typeof resident === "undefined" ) return <NotFound />
    const {mass, height, hair_color, skin_color, eye_color, birth_year, gender} = resident;
    return (
        <div>
            <Breadcrumb  />
            <div className="container mx-auto">
                <h1 className="mx-2 text-6xl bold border-b-2 border-black my-6">{resident.name}</h1>
                <ul className="mx-2">
                    <li>Mass: {mass}</li>
                    <li>Height: {height}</li>
                    <li>Hair color: {hair_color}</li>
                    <li>Skin color: {skin_color}</li>
                    <li>Eye color: {eye_color}</li>
                    <li>Birth year: {birth_year}</li>
                    <li>Gender: {gender}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Resident
/*
*/