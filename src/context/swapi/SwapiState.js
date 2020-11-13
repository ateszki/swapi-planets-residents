import React, { useReducer } from 'react';
import axios from 'axios';
import slug from 'slug';

import SwapiContext from './swapiContext';
import SwapiReducer from './swapiReducer';

import {
    GET_PLANETS,
    GET_RESIDENTS,
    GET_PLANET,
    GET_RESIDENT,
    FILTER_PLANETS,
    SET_LOADING,
    CLEAR_PLANET,
    CLEAR_RESIDENT
} from '../types';

import {
    PLANETS_ENDPOINT
} from '../services';


const SwapiState = props => {
    
    const initialState = {
        planets: [],
        planet: {},
        filter: '',
        residents: [],
        resident: {},
        loading: {
            planets: false,
            planet: false,
            residents: false
        }
    };

    const [state,dispatch] = useReducer(SwapiReducer,initialState);

    
    // get all planets
    const getPlanets = async () => {
        
        setLoading('planets');
        setLoading('planet');
        
        var next  = PLANETS_ENDPOINT;
        var results = [];
        
        while(next !== null){
            let res = await axios.get(next);
            results = [...results, ...res.data.results.map(planet => {
                planet.slug = slug(planet.name);
                return planet;
            })];
            next = res.data.next;
        } ;
        
        dispatch({ type: GET_PLANETS, payload: results } );
       
        
    }

    // get planet from slug
    const getPlanet = async planet_slug => {
        setLoading('planet');

        const planet = state.planets.find(planet => planet.slug === planet_slug);
        
        dispatch({ type: GET_PLANET, payload: {planet} } );     
    }

    // get residents
    const getResidents = async planet_slug => {
        setLoading('residents');
        
        const planet = state.planets.find(planet => planet.slug === planet_slug);
        
        const residents = await Promise.all(planet.residents.map(async endpoint => {
            const res = await axios.get(endpoint);
            const resident = res.data;
            resident.slug = slug(resident.name);
            return resident;
        }));
        
        dispatch({ type: GET_RESIDENTS, payload: { residents } } );     
    }

    // get resident from slug
    const getResident = async resident_slug => {
        const resident = state.residents.find(resident => resident.slug === resident_slug);
        
        dispatch({ type: GET_RESIDENT, payload: resident } );     
    }

    const filterPlanets = text =>  dispatch({ type: FILTER_PLANETS, payload: text});

    const clearPlanet = () => dispatch({ type: CLEAR_PLANET});

    const clearResident = () => dispatch({ type: CLEAR_RESIDENT});


    // set loading
    const setLoading = (type) => dispatch({ type: SET_LOADING, payload: type });

    return <SwapiContext.Provider 
    value = {{
        planets: state.planets,
        planet: state.planet,
        residents: state.residents,
        resident: state.resident,
        loading: state.loading,
        filter: state.filter,
        getPlanets,
        getPlanet,
        getResident,
        getResidents,
        filterPlanets,       
        clearPlanet,
        clearResident 
    }}
    >
        {props.children}
    </SwapiContext.Provider>;
}

export default SwapiState;