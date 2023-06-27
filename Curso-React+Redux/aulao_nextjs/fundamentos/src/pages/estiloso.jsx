import styles from '../styles/estiloso.module.css'
import Voltar from './Voltar'

export default function Estiloso(){
    return(

        <Voltar>
        <div className={styles.estilo}>
            <h1>Estilo usando CSS</h1>
        </div>
        </Voltar>
    )
}