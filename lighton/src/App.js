import { useState } from 'react';
import './App.css';
import Jatekter from './component/Jatekter';

function App() {
  
  const [lista, setLista] = useState([true,false,true,true,false,false,true,true,true])
  function katt(adat){
    //lista[adat]=true
    const slista = [...lista]
  
 if(slista[adat] == true ){
  slista[adat] = false 
 }else{
  slista[adat] = true 
 }

 setLista([...slista])

}
  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>
      <footer>
        <p>Albert Orsolya</p>
      </footer>
    </div>
  );
}

export default App;
