import {
    GET_PLANETS,
    GET_PLANET,
    GET_RESIDENT,
    /*
    CLEAR_PLANET,
    FILTER_PLANETS,
    CLEAR_RESIDENT, */
    SET_LOADING
} from '../types';

const swapiReducer = (state,action) => {
    switch(action.type){
        case GET_PLANETS:
            return {
                ...state,
                planets: action.payload,
                loading: false
            }
        case GET_PLANET:
            return {
                ...state,
                planet: action.payload.planet,
                residents: action.payload.residents,
                loading:false
            }
        case GET_RESIDENT:
            return {
                ...state,
                resident: action.payload,
                loading: false
            }
/*         case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading:false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }*/
        case SET_LOADING:
            return {
                ...state,
                loading: true
            } 
        default:
            return state;
    }
}
export default swapiReducer