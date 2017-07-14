const userKey = 'universiRankings_user'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if(action.payload){
                return { ...state, validToken: true }
            }else{
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload.user, token: action.payload.token, error: null }
        case 'USER_LOGOUT':
            localStorage.removeItem(userKey)
            return { ...state, user: null, token: null, validToken: false }     
        case 'LOGIN_ERROR':
            localStorage.removeItem(userKey)
            return { ...state, user: null, validToken: false, error: action.payload.response.data }    
        default:
            return state
    }
}