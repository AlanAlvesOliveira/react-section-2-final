
import "./CoreConcepts.css";

interface CoreConceptsProps {
  title: string;
  description: string;
  image: string;
}

//outra forma de fazer as props
// function CoreConcepts(props : any){
//   return (
//     <li>
//       <img src={props.image} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

export default function CoreConcepts({ title, description, image }: CoreConceptsProps) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}