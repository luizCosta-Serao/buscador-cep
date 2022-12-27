import React from "react";
import './App.css';
import { FiSearch } from "react-icons/fi"

function App() {
  const [input, setInput] = React.useState("")
  const [cep, setCep] = React.useState()
  const [error, setError] = React.useState(false)

  const handleSearch = async () => {
    if(input.length === 0) {
      setError(true)
    }else if(input.includes("-")) {
      setInput(input.replace("-",""))
    }
    try {
      const response = await fetch(`https://viacep.com.br/ws/${input}/json/`)
      const data = await response.json()
      setError(false)
      setCep(data)
      setInput("")
      console.log(cep)
    } catch {
      setError(true)

      setTimeout(() => {
        setError(false)
      },2000)
    }
  }

  return (
    <section className="container">
      <h1>Buscador de CEP</h1>
      <div className="inputCep">
        <input 
          type="text"
          placeholder="Digite o CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      {error && input.length === 0 ? <p className="error">Preencha o campo</p> : ""}
      {error && input.length > 0 ? <p className="error">Preencha um CEP válido</p> : ""}
        {cep ?
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>ddd: {cep.ddd}</span>
          <span>ibge: {cep.ibge}</span>
          <span>siafi: {cep.siafi}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main> :
        ""
        }
    </section>
  );
}

export default App;
