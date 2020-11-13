import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const PlanetItem = ({index,planet}) => {
    const history = useHistory();
    const handleRowClick = () => {
        history.push(`/planet/${planet.slug}`);
    }
    return (
        <tr onClick={handleRowClick} className={`cursor-pointer ${(index % 2 === 0) ? "bg-grey-200" : "bg-gray-400"}`}>
            <td className="border px-4 py-2"><Link to={`/planet/${planet.slug}`}>{planet.name}</Link></td>
            <td className="border px-4 py-2 text-left hidden lg:table-cell">{planet.climate}</td>
            <td className="border px-4 py-2 text-left hidden lg:table-cell">{planet.terrain}</td>
            <td className="border px-4 py-2 text-center">{planet.residents.length}</td>
        </tr>
    )
}

export default PlanetItem
