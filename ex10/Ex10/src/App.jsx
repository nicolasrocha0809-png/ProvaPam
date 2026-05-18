import Contador from './Components/Contador';
import Relogio from './Components/Relogio';
import Tema from './Components/Tema';
import RandomNumberGenerator from './Components/RandomNumberGenerator';
import './App.css';


function App() {
return (
<div className="App">
    <Tema/>
  <Contador />
  <Relogio />
  <RandomNumberGenerator/>
  
</div>
      );
}
export default App;
