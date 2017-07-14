import React from 'react'
import {Alert} from 'react-bootstrap'

export default props => (
        <Alert bsStyle="danger">
            { props.children }
        </Alert>
)