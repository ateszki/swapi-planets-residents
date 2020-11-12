import React, { useContext } from 'react';
import ResidentItem from './ResidentItem';
import SwapiContext from '../../context/swapi/swapiContext'; 



function Residents() {
    const swapiContext = useContext(SwapiContext);
    const { residents } = swapiContext;

    return (
        <div>
             { residents.map((resident, idx) => <ResidentItem key={idx} resident={resident} />)}
        </div>
    )
}

export default Residents
