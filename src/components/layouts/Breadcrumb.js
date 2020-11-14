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
    
    if(typeof planet !== "undefined" && Object.keys(planet).length !== 0) crumbs.push({to: `/planet/${planet.slug}`, text: planet.name});
    if(typeof planet !== "undefined" && Object.keys(planet).length !== 0 && typeof resident !== "undefined" && Object.keys(resident).length !== 0) crumbs.push({to: `/planet/${planet.slug}/resident/${resident.slug}`, text: resident.name});
    
    return (
        <div className="w-full bg-yellow-500 py-4 px-4">
           <div  className="container mx-auto pl-2">
    {crumbs.map((crumb, idx) => (<span key={idx}>{idx > 0 && " > "}<Link className="underline" to={crumb.to}>{crumb.text}</Link></span>))}            
           </div>
        </div>
    )
}
export default Breadcrumb
