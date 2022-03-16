import React from "react";
import "./style.css";

export default function App() {
  const [idade, setIdade] = React.useState(0);
  const [dtNasc, setDtNasc] = React.useState(2022);
  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  }
  const handBtCalcularClick = () => {
    setDtNasc(2022 - idade);
  }
  return (
    <div>
      <h1>Cálculo Ano de Nascimento</h1>
      <p>Digite sua idade: 
      <input type = "number" value = {idade} onChange = {handleIdadeChange}/>
      </p>
      <p>
        Ano de Nascimento
        <input type = "number" readonly value = {dtNasc} />
      </p>
      <p>
        <button onClick = {handBtCalcularClick}>Calcular data</button>
      </p>
    </div>
  );
}
