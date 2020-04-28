import React from 'react';
import logo from './img/logo_tartaruga.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h2 className="appH2">Bem Vindo ao<br>
     </br> Nosso Desafio</h2>
      <p className="App-intro">Quanto você conhece<br></br> do continente americano?</p>
</header>  
     <div>
       <form>
       <button type="button" name="start" value="start" class="button1">VAMOS LÁ!</button>
       </form> 
     </div>
    </div>
  );
}


export default App;
