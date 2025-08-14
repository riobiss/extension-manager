import React from "react";
import Logo from "../assets/images/logo.svg";
import Sun from "../assets/images/icon-sun.svg"
function Header() {
  return (
    <div className="extensionMode">
      <img src={Logo} alt="Logo" />
      <button className="focused" id="btnThemeMode"><img src={Sun} alt="Sun" /></button>
    </div>
  );
}
export default Header;
