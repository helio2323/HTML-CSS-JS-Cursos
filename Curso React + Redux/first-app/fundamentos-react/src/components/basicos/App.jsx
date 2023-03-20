import React from "react";

import "../../index.css";

import Primeiro from "./primeiro";
import ComParametro from "./ComParametro";
import Fragmento from "./Fragmento";
import Aleatorio from "./aleatorio";
import Card from "../layout/Card";
import Familia from "./Familia";

const tag = <strong>Olá React!!</strong>;

export default function App(props) {
  // é possivel trabalhar com aerofunction, fica assim " _ =>"
  return (
    <div id="app">
      <div>
        <Card titulo="Componente com filhos" >
            < Familia sobrenome="Silva"></Familia>
        </Card>
        <Card titulo="Exemplo de Card">
          <Aleatorio min={10} max={60} />
          <Aleatorio min={10} max={60} />
          <Aleatorio min={10} max={60} />
        </Card>
        <Card titulo="Primeiro Componente">
          <Primeiro></Primeiro>
        </Card>
        <Card titulo="Com Parametro">
          <ComParametro
            titulo="Segundo Componente"
            aluno="Helio"
            nota={9.0}
          ></ComParametro>
        </Card>

        <Card titulo="Fragmento">
          <Fragmento />
        </Card>
      </div>
    </div>
  );
}
