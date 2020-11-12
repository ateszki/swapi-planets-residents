import React, {useContext, useEffect} from 'react';
import SwapiContext from '../../context/swapi/swapiContext'; 

function Resident({ match }) {
    const swapiContext = useContext(SwapiContext);
    const { getResident, resident } = swapiContext;

    useEffect( () => {
        getResident(match.params.resident_slug);
        // eslint-disable-next-line
    },[] )

    return (
        <div>
            <h1>{resident.name}</h1>
            <h2>Attributes</h2>
            <ul>
                <li>Height: {resident.height}</li>
                <li>Hair color: {resident.hair_color}</li>
                <li>Skin color: {resident.skin_color}</li>
                <li>Eye color: {resident.eye_color}</li>
                <li>Birth year: {resident.birth_year}</li>
                <li>Gender: {resident.gender}</li>
            </ul>
        </div>
    )
}

export default Resident
