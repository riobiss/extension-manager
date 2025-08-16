import React from "react";

function Entry(props) {
  const imagens = require.context("../assets/images", false, /\.(svg)$/);

  return (
    <div className="containerItem">
      <div className="info">
        <img
          className="logos"
          src={imagens(`./${props.logo}`)}
          alt={props.name}
        />
        <h2 className="nameItem">{props.name}</h2>
        <p className="infoItem">{props.description}</p>
      </div>

      <div className="removeAndActive">
        <button id="remove" onClick={() => props.onRemove(props.id)}>
          Remove
        </button>
        <label className="switch">
          <input
            type="checkbox"
            checked={props.ativacao}
            onChange={() => props.onToggle(props.id)} // 🔥 controla ativo/inativo
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default Entry;
