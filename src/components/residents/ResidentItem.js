import React, { useContext } from 'react'
import { Link , useHistory} from 'react-router-dom';
import SwapiContext from '../../context/swapi/swapiContext'; 

const ResidentItem = ({ index, resident }) => {
    const swapiContext = useContext(SwapiContext);
    const { planet } = swapiContext;
    const history = useHistory();
    const handleRowClick = () => {
        history.push(`/planet/${planet.slug}/resident/${resident.slug}`);
    }
    return (
        <tr onClick={handleRowClick} className={`cursor-pointer ${(index % 2 === 0) ? "bg-grey-200" : "bg-gray-400"}`}>
            <td className="border px-4 py-2"><Link to={`/planet/${planet.slug}/resident/${resident.slug}`}>{resident.name}</Link></td>
            <td className="border px-4 py-2 text-center">{resident.height}</td>
            <td className="border px-4 py-2 text-center">{resident.mass}</td>
        </tr>
    )
}

export default ResidentItem
