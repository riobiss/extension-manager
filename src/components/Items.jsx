import React from "react";
import data from "../data.json";
import Spy from "../assets/images/logo-style-spy.svg"
/* console.log(data)
console.log(data[1].name)  */
function Items() {
  return (
    <div className="containerItem">
      <img className="logo" src={Spy} alt="caraio" />
      <h2 className="nameItem">DevLens</h2>
      <p className="infoItem">
      Quickly inspect page layouts and visualize element boundaries.
      </p>
      <div className="removeAndActive">
        <button>remove</button> <button>Active</button>
      </div>
    </div>
  );
}
export default Items;
