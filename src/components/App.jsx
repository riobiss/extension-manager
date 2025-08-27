import React, { useState } from "react";
import Cabecalho from "./Cabecalho";
import Items from "./Items";
import "../styles.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () =>{ 
    setIsDark(!isDark)
  }

  return (

    <div id="corpao" data-theme={ isDark ? "dark" : "light"}>
      <div className="container">
        <Cabecalho isDark={isDark} toggleTheme={toggleTheme}/>
        <Items />
      </div>
    </div>
  );
}
export default App;
