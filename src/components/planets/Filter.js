import React, { useContext, useEffect, useState } from 'react'
import SwapiContext from '../../context/swapi/swapiContext'; 


const Filter = () => {
    const swapiContext = useContext(SwapiContext);
    const { filterPlanets } = swapiContext;

    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    const onClear = () => setText('');

    useEffect( () => {
        filterPlanets(text);
        // eslint-disable-next-line
    },[text] )
    
    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={onChange} value={text} placeholder="Filter countries by name" />
                <button className="flex-shrink-0 bg-black hover:bg-gray-700 border-black hover:border-gray-700 text-sm border-4 text-yellow-300 py-1 px-2 rounded" onClick={onClear}>Clear</button>
            </div>
        </div>
    )
}

export default Filter
