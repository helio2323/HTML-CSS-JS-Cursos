import React from "react";

import "../../index.css";

import Primeiro from "./primeiro";
import ComParametro from "./ComParametro";
import Fragmento from "./Fragmento";
import Aleatorio from "./aleatorio";
import Card from "../layout/Card";
import Familia from "./Familia";
import ListaAlunos from "../repeticao/ListaAlunos";
import TabelaProdutos from "../repeticao/TabelaProdutos";
import ParOuImpar from "../condicional/ParOuImpar";
import UsuarioInfo from "../condicional/UsuarioInfo";
import DiretaPai from "../comunicacao/DiretaPai";
import IndiretaPai from "../comunicacao/IndiretaPai";
import Input from "../formulario/Input";
import Contador from "../contador/Contador";
import InputEstilizado from "../TreinoCss/InputEstilizado";
import Supresinha from "../desafio/supresinha";

const tag = <strong>Olá React!!</strong>;

export default function App(props) {
  // é possivel trabalhar com aerofunction, fica assim " _ =>"
  return (
    <div id="app">
      <div>
        <Card>
          <Supresinha></Supresinha>
        </Card>
        <Card>
          <InputEstilizado />
          <InputEstilizado />
        </Card>
        <Card titulo="Contador">
          <Contador numeroInicial={10} />
        </Card>
        <Card titulo="Componente controlado">
          <Input />
        </Card>
        <Card titulo="Comunicacao Indireta" >
          <IndiretaPai />
        </Card>

        <Card titulo="Comunicacao Direta" >
          <DiretaPai />
        </Card>

        <Card titulo="Rederização condicional" >
          <ParOuImpar numero={2} />
          <UsuarioInfo usuario={ {nome: 'Helio'} } />
          <UsuarioInfo usuario={ {email: 'helio_lima@outlook.com.br'} } />
        </Card>
        <Card titulo="Tabela de Produtos">
          <TabelaProdutos />
        </Card>
        <Card titulo="Listas">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="Componente com filhos">
          <Familia sobrenome="Silva"></Familia>
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
