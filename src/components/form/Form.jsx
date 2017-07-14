import React from 'react'

export default props => (
    <form onSubmit={props.onSubmit}>
        {props.children}
    </form>    
)