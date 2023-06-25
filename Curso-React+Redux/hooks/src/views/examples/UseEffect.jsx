import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useState } from 'react'
import { useEffect } from 'react'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function verf(num){
    const n = parseInt(num)

    const result = (n / 2)

    if (Number.isInteger(result)) {
        return 1
    } else {
        return -1
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [n2, setN2] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [number2, setNumber2] = useState(0)
    

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        setNumber2(verf(n2))
    }, [n2])

    return (

        

        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className='text red'>{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className='input' value={number}
                onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercicio #02"></SectionTitle>
     
            <div className="center">
            <div>
                <span className="text">Par ou impar:</span>
                <span className='text red'>{number2 === -1 ? 'impar' : 'par'}</span>
            </div>  
            <input type="number" className='input' value={n2}
            onChange={e => setN2(e.target.value)}
            />    
            </div>

            <div className="center">

            </div>

        </div>
    )
}

export default UseEffect
