import React from 'react';
import { Link } from 'react-router-dom';


const Breadcrumb = () =>  {
    return (
        <ul>
            <li><Link to="/">All planets</Link></li>
        </ul>
    )
}
export default Breadcrumb
