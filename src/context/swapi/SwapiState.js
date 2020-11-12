import React, { useReducer } from 'react';
import axios from 'axios';
import slug from 'slug';

import SwapiContext from './swapiContext';
import SwapiReducer from './swapiReducer';

import {
    GET_PLANETS,
    GET_PLANET,
    GET_RESIDENT,
    /* 
    FILTER_PLANETS,
    GET_PLANET,
    CLEAR_PLANET,
    CLEAR_RESIDENT,*/
    SET_LOADING
} from '../types';

import {
    PLANETS_ENDPOINT
} from '../services';


const SwapiState = props => {
    
    const initialState = {
        planets: [],
        planet: {},
        residents: [],
        resident: {},
        loading: false
    };

    const [state,dispatch] = useReducer(SwapiReducer,initialState);

    
    // get all planets
    const getPlanets = async () => {
        
        setLoading();
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
        
        const planet = state.planets.find(planet => planet.slug === planet_slug);
        
        const residents = await Promise.all(planet.residents.map(async endpoint => {
            const res = await axios.get(endpoint);
            const resident = res.data;
            resident.slug = slug(resident.name);
            return resident;
        }));
        
        dispatch({ type: GET_PLANET, payload: {planet, residents} } );     
    }
    // get planet from slug
    const getResident = async resident_slug => {
        const resident = state.residents.find(resident => resident.slug === resident_slug);
        
        dispatch({ type: GET_RESIDENT, payload: resident } );     
    }

/* 
    // search users
    const searchUsers = async text  => {
        setLoading();
        const res = await axios.get(PLANETS_ENDPOINT);
        dispatch({ type: SEARCH_USERS, payload: res.data.items } );
    }

    // get user
    const getUser = async login => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({ type: GET_USER, payload: res.data });
      }

    // search repos
    const getUserRepos = async login => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({ type: GET_REPOS, payload: res.data });
      }

    // clear users
    const clearUsers = () => dispatch({ type: CLEAR_USERS});
  */   
    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <SwapiContext.Provider 
    value = {{
        planets: state.planets,
        planet: state.planet,
        residents: state.residents,
        resident: state.resident,
        loading: state.loading,
        getPlanets,
        getPlanet,
        getResident,
/*         
        clearPlanet,
        clearResident */
    }}
    >
        {props.children}
    </SwapiContext.Provider>;
}

export default SwapiState;