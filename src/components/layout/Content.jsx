import React from 'react'

export default props => (
        <div className={props.className}>
            <div className="row">
                <div className="container">
                    { props.children }
                </div>
            </div> 
        </div>    
    )
