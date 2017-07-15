import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
        background-color: #F2DEDE;
        border-radius: 6px;
        padding: 15px;
        border: 1px solid #ecc1c1;
        margin: 15px 0px;
    `;

const Text = styled.p`
        font-weight: bolder;
        color: #a00404;
        margin: 0px 0px;
    `;    

class Message extends Component {

    render(){
        return(
            <Wrapper>
                <Text>{this.props.children}</Text>
            </Wrapper>    
        )
    }
}

export default Message