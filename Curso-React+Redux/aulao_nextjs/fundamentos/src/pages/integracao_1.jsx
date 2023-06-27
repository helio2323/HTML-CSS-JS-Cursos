import { useState } from "react"

export default function Integracao (){

    const[cliente, setCliente] = useState({})
    const[codigo, setCodigo] = useState(1)

    function obeterCliente() {
        fetch("http://localhost:3000/api/hello")
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }
    
    return(

    <div>
        <div>
            <button onClick={obeterCliente}>Buscar</button>
        </div>
        <div><input type="number" value={codigo} 
        onChange={e => setCodigo(e.target.value)}/></div>
       <ul>
        <li>Nome: {cliente.name} </li>
        <li>Idade: {cliente.age} </li>
       </ul>

    </div>
    )
}