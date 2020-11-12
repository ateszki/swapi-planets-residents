import React from 'react';
import { Link } from 'react-router-dom';

function PlanetItem({planet}) {
    return (
        <div>
            Planet: {planet.name} <Link to={`/planet/${planet.slug}`}>Visit</Link>
        </div>
    )
}

export default PlanetItem
