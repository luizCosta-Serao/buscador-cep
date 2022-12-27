import React from "react";
import './App.css';
import { FiSearch } from "react-icons/fi"

function App() {
  return (
    <section className="container">
      <h1>Buscador de CEP</h1>
      <div className="inputCep">
        <input 
          type="text"
          placeholder="Digite o CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 000000000</h2>
        <span>Rua Algum Canto</span>
        <span>Complemento: Algum complemento</span>
        <span>Bairro: Vila Hortência</span>
        <span>Curitiba - PR</span>
      </main>
    </section>
  );
}

export default App;
