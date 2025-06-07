import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import "./Exmples.css";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tab";

export default function Examples() {
    const [selectedTopic, setSeletedTopic] = useState();

    function handleSelect(selectedButton: any) {
        setSeletedTopic(selectedButton);
    }

    let tabContent = (<p>Please select a topic.</p>);
    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'Components'} onSelect={() => handleSelect('Components')}>Componests</TabButton>
                    <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'Props'} onSelect={() => handleSelect('Props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'State'} onSelect={() => handleSelect('State')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>

        </Section>
    );
}