import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import SwapiContext from '../../context/swapi/swapiContext'; 
function ResidentItem({ resident }) {
    const swapiContext = useContext(SwapiContext);
    const { planet } = swapiContext;

    return (
        <div>
            Resident:<Link to={`/planet/${planet.slug}/resident/${resident.slug}`}>{resident.name}</Link> 
        </div>
    )
}

export default ResidentItem
