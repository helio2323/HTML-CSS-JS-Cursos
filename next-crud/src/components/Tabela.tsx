import Cliente from '../core/Cliente'

interface TabelaProps{
    clientes: Cliente[]    
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho(){
        return(
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Idade</th>
        </tr>    
        )

    }

    function renderizarDados(){
        return(
            props.clientes?.map()
        )
    }

    return(
        <table>
            {renderizarCabecalho()}
        </table>
    )
}