import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'

function App() {
  const [a, set_a] = useState("Learn React");
  const [stateA, setStateA] = useState(true);
  const [title, setTitle] = useState("Título");
  useEffect(() => {
    stateA ? setStateA(false) : console.log("Texto do anchor mudou!")
  }, [a]);

  const handleClick = () => {
    set_a("Mudando Testo do elemento anchor")

  }

  const handleClick2 = () => {
    setTitle('Título Original')
  }


  return (
    <div className="App">
      <header className="App-header">
        <Button func={handleClick2} text="Clique apara mudar o texto" />
        <h1>{title}</h1>
        <Button func={handleClick} text="Muda o conteúdo do elemento anchor" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {a}
        </a>

      </header>
    </div>
  );
}
export default App;
