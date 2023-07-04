interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
}

export default function Formulario (props: EntradaProps) {
    return(
        <div>
            <label htmlFor="">
                {props.texto}
                <input type={props.tipo ?? 'text'} 
                value={props.valor}
                readOnly={props.somenteLeitura}/>
            </label>
        </div>
    )
}