import React from 'react'

export default props => (
    <button type={props.type} className={`btn btn-${props.className}`} onClick={props.onClick}>{props.text}</button>
)