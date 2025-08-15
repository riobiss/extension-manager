import React from "react";

function Entry(props) {
  const imagens = require.context("../assets/images", false, /\.(svg)$/);

  return (
    <div className="containerItem">
      <div className="info">
        <img className="logos" src={imagens(`./${props.logo}`)} alt="caraio" />
        <h2 className="nameItem">{props.name}</h2>
        <p className="infoItem">{props.description}</p>
      </div>
      <div className="removeAndActive">
        <button id="remove">Remove</button>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
export default Entry;
