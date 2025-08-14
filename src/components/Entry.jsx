import React from "react";
function Entry(props){
  return (
    <div className="containerItem">
    <img src={props.logo} alt="caraio" />
     <h2 className="nameItem">{props.name}</h2>
     <p className="infoItem">{props.description}</p>
     <div className="removeAndActive">
        <button id="remove">Remove</button>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </div>

  )
}
export default Entry