import React from "react";

function Categoria() {
  return (
    <div id="categoria">
      <div id="extensionList">
        <h1>Extension List</h1>
      </div>
      <div className="selecao">
        <button className="cursorActive">All</button>
        <button className="cursorActive">Active</button>
        <button className="cursorActive">Inactive</button>
      </div>
    </div>
  );
}

export default Categoria;
