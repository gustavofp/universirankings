import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
        padding: 10px;
        display: block;
        width: 100%;
        border: 1px solid #e8e8e8;

        &::-webkit-input-placeholder {
              color: #c5c5c5;
       }
       &:-moz-placeholder {
              /* FF 4-18 */
              color: #c5c5c5;
       }
       &::-moz-placeholder {
               /* FF 19+ */
               color: #c5c5c5;
       }
       &:-ms-input-placeholder {
               /* IE 10+ */
               color: #c5c5c5;
        }

        &:focus {
                &::-webkit-input-placeholder {
                        color: #DADADA;
                }
                &:-moz-placeholder {
                        /* FF 4-18 */
                        color: #DADADA;
                }
                &::-moz-placeholder {
                        /* FF 19+ */
                        color: #DADADA;
                }
                &:-ms-input-placeholder {
                        /* IE 10+ */
                        color: #DADADA;
                }
        }
`

class Input extends Component {

        render(){
                return(
                      <StyledInput {...this.props.input} type={this.props.type} name={this.props.inputName} placeholder={this.props.placeholder} />  
                )
        }

}

export default Input        

