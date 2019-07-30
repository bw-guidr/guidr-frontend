import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ERROR_MESSAGE,
    GET_USERS,
    GET_TRIPS,
    LOADING
} from '../Action/Action'

const initialState = {
    isLoggingIn:false,
    isSigningUp:false,
    error:'',
    isFetching:false,
    dropped: false,
    tripData: [],
    trips: []
}

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn:true,
                error:''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn:false,
                error:''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoggingIn:false
            };
        case GET_USERS:
            return Object.assign({}, state, {users: action.users, loading: false, error: ''})
        case ERROR_MESSAGE:
            return Object.assign({}, state, {error: action.errorMessage, loading: false})
        case LOADING:
            return Object.assign({}, state, {loading: true})
        case GET_TRIPS:
        return Object.assign({}, state, {trips: action.trips, loading: false, error: ''})
        default:
            return state;    
        }
    }