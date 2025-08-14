import React from "react";
import Cabecalho from "./Cabecalho";
import Categoria from "./Categoria";
import Items  from "./Items";
import "../styles.css";

function App() {
  return (
    <div className="container">
      <Cabecalho />
      <Categoria />
      <Items/>
    </div>
  );
}
export default App;
