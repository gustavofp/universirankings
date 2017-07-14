import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import '../assets/css/Layout.css'

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
                    <NavItem eventKey={1} href="/login">Login</NavItem>
                    <NavItem eventKey={2} href="#">Pesquisar</NavItem>
                </Nav>
             </Navbar.Collapse>   
        </Navbar>
     );
    }
}

export default Header;