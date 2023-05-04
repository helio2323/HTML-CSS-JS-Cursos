import React, {useState} from "react";

export default props => {
    const multiplier = 55

    

    function gerarNumero(qtd) {
        const Array = []
        for (let i=1; i <= qtd; i++){
    let alnumb = parseInt(Math.random() * multiplier)
    Array.push(alnumb)
            
   }
   console.log(Array)
}

    

    return (
        <div>
            <h2>Mega</h2>
            <li>{this.Array}</li>
            <button onClick={gerarNumero(10)}>Gerar</button>
        </div>
    )
    
}


