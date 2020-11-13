import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import SwapiContext from '../../context/swapi/swapiContext'; 

const ResidentItem = ({ resident }) => {
    const swapiContext = useContext(SwapiContext);
    const { planet } = swapiContext;
    
    const { name, slug, height, mass, birth_year } = resident;
    
    return (
        <Link  to={`/planet/${planet.slug}/resident/${slug}`} className="max-w-sm border border-black rounded overflow-hidden shadow-lg mx-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="text-gray-700 text-base h-24 mb-4">
                    <div><b>Height: </b>{ height }</div>
                    <div><b>Mass:</b> { mass }</div>
                    <div><b>Birth:</b> {birth_year}</div>
                </div>
            </div>
        </Link>
    )
}

export default ResidentItem
