import Produtos from "../data/Produtos";

export default (props) => {

function getLinhas(){
    return Produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
}
    return (
      <table border={1}>
          <thead>
            <th>id</th>
            <th>Nome Produto</th>
            <th>Preço</th>
          </thead>
          <tbody>

                {getLinhas()}

          </tbody>
      </table>
    );


};
