import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Sun from "../assets/images/icon-sun.svg";
import Moon from "../assets/images/icon-moon.svg"

function Cabecalho({isDark, toggleTheme}) {
  const [isImg, setIsImg] = useState(true);

  
 const clickImg = () =>{
  setIsImg(!isImg);
  toggleTheme();
 }

  return (
    <div className="extensionMode">
      <img id="logoInit" src={Logo} alt="Logo" />
      <div onClick={clickImg } id="btnThemeMode">
        <button>
          <img  src={isImg ? Sun : Moon} alt="Moon" />
      </button>
      </div>
    </div>
  );
}
export default Cabecalho;
