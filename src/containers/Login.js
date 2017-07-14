import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import { loginUser } from '../actions/loginActions'
import Title from '../components/layout/Title'
import Row from '../components/layout/Row'
import Jumbotron from '../components/layout/Jumbotron'
import LoginForm from './LoginForm'
import ErrorMessage from '../components/form/ErrorMessage'
import If from '../components/operators/If'

class Login extends Component{
    
    handleSubmit(values){
        const { email, password } = values
        const { loginUser } = this.props
        
        loginUser(email, password, this.props.history)
    }

    componentWillMount() {
        if (this.props.user){
            return (this.props.history.push('/index')) 
        }
    }

    render() {
            return(
                <div>
                    <Jumbotron>
                        <Title>Login</Title>
                        <Row>
                            <LoginForm onSubmit={this.handleSubmit.bind(this)} />
                        </Row>    
                        <If test={this.props.error}>
                            <Row>
                                <ErrorMessage>
                                    {this.props.error}
                                </ErrorMessage>
                            </Row>    
                        </If> 
                    </Jumbotron>      
                </div>    
            )
    }
}

const mapStateToProps = state => ({error: state.session.error, user: state.session.user})
const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
