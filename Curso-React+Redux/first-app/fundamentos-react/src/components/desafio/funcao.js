const multiplier = 55

const array = []

function gerarNumero(qtd) {
   for (let i=1; i <= qtd; i++){
    let alnumb = parseInt(Math.random() * multiplier)
    array.push(alnumb)

    
   }
   console.log(array)
}

gerarNumero(10)