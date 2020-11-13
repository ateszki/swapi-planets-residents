import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SwapiContext from '../../context/swapi/swapiContext'; 


const Breadcrumb = () =>  {
    const swapiContext = useContext(SwapiContext);
    const { resident, planet } = swapiContext;
    let crumbs = [{
        to: "/",
        text: "All planets"
    }];
    
    if(Object.keys(planet).length !== 0) crumbs.push({to: `/planet/${planet.slug}`, text: planet.name});
    if(Object.keys(planet).length !== 0 && Object.keys(resident).length !== 0) crumbs.push({to: `/planet/${planet.slug}/resident/${resident.slug}`, text: resident.name});
    
    return (
        <div className="w-full bg-gray-200 py-4 px-4">
           <div  className="container mx-auto">
                {crumbs.map((crumb, idx) => (<span key={idx}><Link className="underline" to={crumb.to}> &gt; {crumb.text}</Link></span>))}            
           </div>
        </div>
    )
}
export default Breadcrumb
