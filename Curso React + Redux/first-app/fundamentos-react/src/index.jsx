import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const tag = <strong>Olá React!!!</strong>

ReactDOM.render(
    <div>
       {tag}
        <hr></hr>
       <Primeiro></Primeiro>
       <hr />
       <ComParametro
            titulo="Segundo Componente"
            aluno="Helio"
            nota={9.0}>        
        </ComParametro>
        <hr />
        <Fragmento/>
    </div>,
    document.getElementById('root')
)    