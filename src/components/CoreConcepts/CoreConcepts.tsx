import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";


export default function CoreConcepts() {
  return (
    <section id="core-concepts">      
      <h2>Core Concepts</h2>
      <ul>

        {/* <CoreConcepts title="Components" description="the core ui building block" image={componentImg}   />  */}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
              <CoreConcepts {...CORE_CONCEPTS[1]} />
              <CoreConcepts {...CORE_CONCEPTS[2]} />
              <CoreConcepts {...CORE_CONCEPTS[3]} /> */}

        {CORE_CONCEPTS.map(item => (
          <CoreConcept key={item.title} {...item} /> //key não é usando dento do custom component, mas o react usa para  gerenciar os itens
        ))}

      </ul>
    </section>
  )
}