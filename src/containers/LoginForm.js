import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import '../assets/css/LoginForm.css'

import Form from '../components/form/Form'
import FormGroup from '../components/form/FormGroup'
import Input from '../components/form/Input'
import Label from '../components/form/Label'

class LoginForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label name="email" text="Email" />  
                            <Field name="email" component={Input} inputName="Email" type="email" placeholder="Insira o email cadastrado" />  
                        </FormGroup> 
                        <FormGroup>
                             <Label name="password" text="Senha" /> 
                             <Field name="password" component={Input} inputName="Password" type="password" placeholder="Insira a senha cadastrada" />   
                        </FormGroup> 
                        <FormGroup>
                             <button type="submit" className="btn btn-success pull-right">Entrar</button>   
                        </FormGroup>
                     </Form>    
        )
    }

}

export default reduxForm({form: 'loginForm'})(LoginForm);