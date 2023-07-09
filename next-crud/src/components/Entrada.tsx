interface EntradaProps {
  tipo?: 'text' | 'number';
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
}

export default function Formulario(props: EntradaProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`border border-purple-500 rounded-lg
        focus:outline-none`}
      />
    </div>
  );
}