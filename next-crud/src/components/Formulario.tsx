import Entrada from '../components/Entrada'

interface FomrmularioProps{

}

export default function Formulario (props: FomrmularioProps) {
    return(
        <div>
            <Entrada texto='Nome' valor="Teste" />
        </div>
    )
}