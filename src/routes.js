import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './containers/App'
import Login from './containers/Login'

export default props => (
    <Router>
        <App>
           <Route path="/login" component={Login} />  
        </App>    
    </Router>
)


