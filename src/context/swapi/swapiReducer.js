import {
    GET_PLANETS,
    GET_PLANET,
    GET_RESIDENT,
    CLEAR_PLANET,
    CLEAR_RESIDENT,
    SET_LOADING,
    FILTER_PLANETS
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
        case FILTER_PLANETS:
            return {
                ...state,
                filter: action.payload
            }
        case CLEAR_PLANET:
            return {
                ...state,
                planet: {},
                resident: {}
            }
        case CLEAR_RESIDENT:
            return {
                ...state,
                resident: {}
            }
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