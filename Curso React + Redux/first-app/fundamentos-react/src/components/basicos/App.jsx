import React from 'react'

import '../../index.css'

import Primeiro from './primeiro'
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
import Aleatorio from './aleatorio'

const tag = <strong>Olá React!!</strong>

export default function App(props) { // é possivel trabalhar com aerofunction, fica assim " _ =>"
    return (
        <div id='app'>

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
            <Fragmento />
            <hr />
            <Aleatorio min={10} max={60}/>
        </div>
    )
}