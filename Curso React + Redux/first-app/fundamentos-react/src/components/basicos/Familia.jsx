import React from 'react'
import FamiliaMebro from './FamiliaMebro'

export default props => {
    return (
        <div>
            <FamiliaMebro nome="Pedro" sobrenome="Silva"></FamiliaMebro>
            <FamiliaMebro nome="Ana" {...props}></FamiliaMebro>
            <FamiliaMebro nome="Gustavo" sobrenome={props.sobrenome}></FamiliaMebro>
        </div>
    )
}