import React, {useContext, useEffect} from 'react';
import SwapiContext from '../../context/swapi/swapiContext'; 
import Spinner from '../layouts/Spinner';
import Breadcrumb from '../layouts/Breadcrumb';

const Resident = ({ match }) => {
    const swapiContext = useContext(SwapiContext);
    const { getResident, getPlanets, getPlanet, resident, planets, planet } = swapiContext;

    
    useEffect( () => {
        if (planets.length === 0) getPlanets();
        // eslint-disable-next-line
    },[] )
    useEffect( () => {
        if (planets.length > 0) getPlanet(match.params.planet_slug);
        // eslint-disable-next-line
    },[planets] )
    useEffect( () => {
        if(planet !== {} ) getResident(match.params.resident_slug);
        // eslint-disable-next-line
    },[planet] )
    

    if(typeof resident === 'undefined') return <Spinner />
    const {mass, height, hair_color, skin_color, eye_color, birth_year, gender} = resident;
    return (
        <div>
            <Breadcrumb  />
            <div className="container mx-auto">
                <h1 className="mx-2 text-6xl bold">{resident.name}</h1>
                <ul>
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