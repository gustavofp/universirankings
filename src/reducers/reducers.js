import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import sessionReducer from './session/reducer'

const rootReducer = combineReducers({
  form: formReducer,
  session: sessionReducer 
})

export default rootReducer