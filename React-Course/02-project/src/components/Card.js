import concepts from '../App'

export default function Card(props){
    return(
        <ul id="concepts">
        <li className="concept">
          <img src={props.image} alt={props.alt} />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
      </ul>
    )
}