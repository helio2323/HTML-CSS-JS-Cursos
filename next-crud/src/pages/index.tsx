import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Ana', 55, '1'),
    new Cliente('Pedro', 55, '2')
  ]

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>

      <Layout titulo="Cadastro Simples" >
        <span>
          <Tabela clientes={clientes}></Tabela>
        </span>
        </Layout>  
    </div>
  )
}
