import React from "react";
import Header from "./Header";
import Categoria from "./Categoria";
import Items  from "./Items";
import "../styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Categoria />
      <Items/>
    </div>
  );
}
export default App;
