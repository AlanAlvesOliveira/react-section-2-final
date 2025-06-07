
import "./CoreConcept.css";

interface CoreConceptProps {
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

export default function CoreConcept({ title, description, image }: CoreConceptProps) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}