
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.tsx';
import Header from './components/Header/Header.tsx';
import TabButton from './components/TabButton/TabButton.tsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.tsx';


function App() {

  const [selectedTopic, setSeletedTopic] = useState();

  function handleSelect(selectedButton: any) {
    setSeletedTopic(selectedButton);
  }

  let tabContent = (<p>Please select a topic.</p>);
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        {selectedTopic}
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>

      <Header />

      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>

          {/* <CoreConcepts title="Components" description="the core ui building block" image={componentImg}   />  */}
          {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} /> */}

          {CORE_CONCEPTS.map(item => (
            <CoreConcepts key={item.title} {...item} /> //key não é usando dento do custom component, mas o react usa para  gerenciar os itens
          ))}

        </ul>
      </section>
      <section id="examples">
        <h2>Exaples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'Components'} onSelect={() => handleSelect('Components')}>Componests</TabButton>
          <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handleSelect('JSX')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'Props'} onSelect={() => handleSelect('Props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'State'} onSelect={() => handleSelect('State')}>State</TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;


