import React from 'react'

export default props => (
        <input {...props.input} type={props.type} name={props.inputName} className="form-control" placeholder={props.placeholder} />
)
