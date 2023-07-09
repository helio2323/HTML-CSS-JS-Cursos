import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { text } from "stream/consumers";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clientes = [new Cliente("Ana", 55, "1"), new Cliente("Pedro", 55, "2")];
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente(){
    setCliente(Cliente.vazio)
    setVisivel('form')
  }

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente} >Novo Cliente</Botao>
            </div>
            <span>
              <Tabela
                clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              ></Tabela>
            </span>
          </>
        ) : (
          <span>
            <Formulario cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')} />

          </span>
        )}
      </Layout>
    </div>
  );
}
