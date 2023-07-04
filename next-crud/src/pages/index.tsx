import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import Botao from '@/components/Botao'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Ana', 55, '1'),
    new Cliente('Pedro', 55, '2')
  ]
function clienteSelecionado (cliente: Cliente) {
  console.log(cliente.nome)
}
function clienteExcluido (cliente: Cliente) {
  console.log(cliente.nome)
}
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>

      <Layout titulo="Cadastro Simples" >
        <div className='flex justify-end'>
          <Botao className='mb-4'>Novo Cliente</Botao>
        </div>
        <span>
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>
        </span>
        </Layout>  
    </div>
  )
}
