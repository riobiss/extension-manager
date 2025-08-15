import React from "react";
import data from "../data.json";
import Entry from "./Entry";

/* console.log(data)
console.log(data[1].name)  */

function CreateItems(ItemTerm, data) {
  return (
    <Entry 
      key={data}
      logo={ItemTerm.logo}
      name={ItemTerm.name}
      description={ItemTerm.description}
      ativacao={ItemTerm.isActive}
    />
  );
}
function Items() {
  return (
    <div>
      <div className="divisao">
        {data.map(CreateItems)}
        {/*         <img className="logo" src={Spy} alt="caraio" />
        <h2 className="nameItem">DevLens</h2>
        <p className="infoItem">
          Quickly inspect page layouts and visualize element boundaries.
        </p> */}
      </div>
      
    </div>
  );
}
export default Items;
