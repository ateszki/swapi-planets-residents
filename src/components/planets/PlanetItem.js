import React from 'react';
import { Link } from 'react-router-dom';

const PlanetItem = ({ planet }) => {

    const { name, slug, climate, terrain, residents} = planet;
    return (
        <Link  to={`/planet/${slug}`} className="max-w-sm border border-black rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="text-gray-700 text-base h-24 mb-4">
                    <div><b>Residents: </b> {residents.length}</div>
                    <div><b>Climate: </b>{ climate }</div>
                    <div><b>Terrain:</b> { terrain }</div>
                </div>
            </div>
        </Link>
    )
}

export default PlanetItem
