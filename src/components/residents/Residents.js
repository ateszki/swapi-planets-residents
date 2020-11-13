import React, { useContext } from 'react';
import ResidentItem from './ResidentItem';
import SwapiContext from '../../context/swapi/swapiContext'; 



const Residents = () => {
    const swapiContext = useContext(SwapiContext);
    const { residents } = swapiContext;

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl bold">Residents ({residents.length})</h2>
            {residents.length > 0 ? (
                <table className="table-auto w-full">
                <thead>
                    <tr>
                    <th className="px-4 py-2 w-2/4 text-left">Resident</th>
                    <th className="px-4 py-2 w-1/4">Height</th>
                    <th className="px-4 py-2 w-1/4">Mass</th>
                    </tr>
                </thead>
                <tbody>
                { residents.map((resident, idx) => <ResidentItem key={idx} index={idx} resident={resident} />)}
                </tbody>
                </table>
            ): (<div>There are no residents in this country</div>)
            }
             
        </div>
    )
}

export default Residents
