import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useMemo } from 'react'

function sum(a, b){
    const future = Date.now() + 2000
    while(Date.now() < future) {}
    return a + b
}

const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    const result = useMemo(() => sum(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <input type="number" className='input' value={n1} 
            onChange={e => setN1(e.target.value)}/>
            <input type="number" className='input' 
            onChange={e => setN2(e.target.value)} value={n2}/>            
            <input type="number" className='input' 
            onChange={e => setN3(e.target.value)} value={n3}/>

           <span className="text">{result}</span>

        </div>
    )
}

export default UseMemo
