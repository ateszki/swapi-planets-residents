import {
    GET_PLANETS,
    GET_PLANET,
    GET_RESIDENTS,
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
                loading: {...state.loading, planets: false}
            }
        case GET_PLANET:
            return {
                ...state,
                planet: action.payload.planet,
                loading: {...state.loading, planet: false}
            }
        case GET_RESIDENTS:
            return {
                ...state,
                residents: action.payload.residents,
                loading: {...state.loading, residents: false}
            }
        case GET_RESIDENT:
            return {
                ...state,
                resident: action.payload
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
                resident: {},
                residents: []
            }
        case CLEAR_RESIDENT:
            return {
                ...state,
                resident: {}
            }
        case SET_LOADING:
            //let loading = {...state.loading}
            //loading[action.payload] = true; 
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [action.payload]: true
                }
            } 
        default:
            return state;
    }
}
export default swapiReducer