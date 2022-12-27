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
      <p></p>
      {error && input.length === 0 ? <p className="error">Preencha o campo</p> : ""}
      {error && input.length > 0 ? <p className="error">Preencha um CEP válido</p> : ""}
        {cep ?
        <main className="main">
          <h2>CEP: <span style={{fontWeight:"400"}}>{cep.cep}</span></h2>
          <span style={{fontWeight:"400"}}>{cep.logradouro}</span>
          <span>Complemento: <span style={{fontWeight:"400"}}>{cep.complemento === "" ? "Nenhum complemento" : cep.complemento}</span></span>
          <span>ddd: <span style={{fontWeight:"400"}}>{cep.ddd}</span></span>
          <span>ibge: <span style={{fontWeight:"400"}}>{cep.ibge}</span></span>
          <span>siafi: <span style={{fontWeight:"400"}}>{cep.siafi}</span></span>
          <span>Bairro: <span style={{fontWeight:"400"}}>{cep.bairro}</span></span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main> :
        ""
        }
    </section>
  );
}

export default App;
