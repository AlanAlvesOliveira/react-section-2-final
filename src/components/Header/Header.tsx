 
import reactImg from '../../assets/react-core-concepts.png';
import { useEffect, useState } from "react";
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

  const [description, setDescription] = useState(reactDescriptions[genRandomInt(2)])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDescription(reactDescriptions[genRandomInt(2)])
    }, 1000);

    return () => clearInterval(intervalId) // Limpa o intervalo quando o componente é desmontad;
  }, []);

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}