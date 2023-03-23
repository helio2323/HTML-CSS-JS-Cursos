import React from "react";

export default (props) => {
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random () * (max - min))+50
    const gerarNerd = () => Math.random() > 0.6
  return (
    <div>
      <div>Filho</div>
      <button onClick={
        function (e) {
            props.quandoClicar('João', gerarIdade(), gerarNerd())
        }
      }>Fornecer Informação</button>
    </div>
  );
};
