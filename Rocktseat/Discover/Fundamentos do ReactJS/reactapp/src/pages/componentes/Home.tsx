import './style.css'

function Home(){
  return(
    <div className='container'>
      <h1>Home</h1>
      <input type="text" placeholder="Digite um nome.." />
      <button type="button">Adicionar</button>
    </div>
  )
}

export default Home