
import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import DigaMeuNome from './DigaMeuNome';


function App() {
  return (
    <div className="App">
      <h1>MEU APP REACT</h1>
      <Frase />
      <HelloWorld />
      <Frase />
      <DigaMeuNome nome ="Vene" />
      <p></p>
    </div>
  );
}

export default App;
