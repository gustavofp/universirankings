import React, { Component } from 'react'
import {connect} from 'react-redux'

import {NavItem} from 'react-bootstrap'

class UserInfo extends Component{

    render() {
        return (
            <div>
                <NavItem eventKey={3}>{this.props.user.email}</NavItem>
            </div>    
        )   
    }    
}

const mapStateToProps = state => ({user: state.session.user})   
export default connect(mapStateToProps, null)(UserInfo)