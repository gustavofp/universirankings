import axios from 'axios'

import constants from '../constants'

export function loginUser(email, password, router){
    return dispatch => {
        axios.post(`${constants.URL_API}/login`, {email, password}).then(resp => {
            dispatch({
                type: 'USER_FETCHED',
                payload: resp.data
            })
            dispatch(validateToken(resp.data.token))
        }).then(resp => {
            router.push('/index')
        }).catch(err => {
            console.log(err)
            dispatch({
                type: 'LOGIN_ERROR',
                payload: err
            })
        })
    }
}

export function validateToken(token){
    return dispatch => {
        axios.post(`${constants.URL_API}/validateToken`, token).then(resp => {
            dispatch({
                type: 'TOKEN_VALIDATED',
                payload: true
            })
        }).catch(err => {
            dispatch({
                type: 'TOKEN_VALIDATED',
                payload: false
            })
        })
    }
}