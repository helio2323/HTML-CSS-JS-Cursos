function solucao(resultados) {
    const resultados = ['VERMELHO', 'AMARELO', 'AMARELO', 'PRETO', 'FORA'];
let pontos = 0;

for (const resultado of resultados) {
  if (resultado === 'VERMELHO') {
    pontos += 3;
  } else if (resultado === 'AMARELO') {
    pontos += 2;
  } else if (resultado === 'PRETO') {
    pontos += 1;
  }
}

console.log(pontos);

}