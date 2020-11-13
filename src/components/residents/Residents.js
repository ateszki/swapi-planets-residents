import React, { useContext } from 'react';
import ResidentItem from './ResidentItem';
import Spinner from '../layouts/Spinner';
import SwapiContext from '../../context/swapi/swapiContext'; 


const Residents = () => {
    const swapiContext = useContext(SwapiContext);
    const { residents, loading } = swapiContext;

    if (loading.residents) return <Spinner />;
    return (
        <div className="container mx-auto">
            {residents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                { residents.map((resident, idx) => <ResidentItem key={idx} resident={resident} />)}
                </div>
            ): (<div>There are no residents in this country</div>)
            }
             
        </div>
    )
}

export default Residents
