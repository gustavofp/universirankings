import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import '../assets/css/Layout.css'

import If from './operators/If'

import UserInfo from '../containers/UserInfo'

class Header extends Component {
    render() {
        return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">UniversiRankings</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Pesquisar</NavItem>
                    <If test={!this.props.validToken} >
                        <NavItem eventKey={2} href="/login">Login</NavItem>
                    </If>
                    <If test={this.props.validToken} >
                        <UserInfo />
                    </If>   
                </Nav>
             </Navbar.Collapse>   
        </Navbar>
     );
    }
}

const mapStateToProps = state => ({validToken: state.session.validToken})
export default connect(mapStateToProps, null)(Header)