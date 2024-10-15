import { useState } from 'react';
import './App.css';
import Jatekter from './component/Jatekter';

function App() {
  
  const [lista, setLista] = useState([" "," "," "," "," "," "," "," "," "])
  const [kapcs, setKapcs] = useState(0)
  function katt(adat){
    lista[adat]="🟢"
    const slista = [...lista]
  
 if(kapcs%2 ==0 ){
    slista[adat]="🟢"
 }else{
  slista[adat]="🔴"
 }
 let skapcs = kapcs
 skapcs++
 setKapcs(skapcs)
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
