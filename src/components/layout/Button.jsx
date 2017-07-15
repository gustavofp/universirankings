import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: green
`

export default props => (
    <Button type={props.type} onClick={props.onClick}>{props.text}</Button>
)