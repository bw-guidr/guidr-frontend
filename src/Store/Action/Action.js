import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const ERROR_MESSAGE = "ERROR_MESSAGE"
export const LOADING = "LOADING"
export const GET_USERS = "GET_USERS"

export const login = creds => dispatch => {
    dispatch({type:LOGIN_START});
    return axios
    .post('',creds)
    .then(res => {
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('id',res.data.user.id)
        dispatch({type:LOGIN_SUCCESS,payload:res.data.payload})
        console.log("res", res)
        return true
    })
    .catch(err => {
        dispatch({type:LOGIN_FAILURE,payload:err.response})
    })
}

export const signup = (creds) => {
    return(dispatch) => {
      dispatch({type: LOADING})
      axios.post('', creds)
        .then( response => {
          dispatch({type: GET_USERS, users: response.data})
        })
        .catch(err => {
          dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
        })
    }
  }