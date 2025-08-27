import React, { useState } from "react";
import data from "../data.json";
import Entry from "./Entry";

function Items() {
  const [items, setItems] = useState(data);
  const [filter, setFilter] = useState("all");

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function toggleActive(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true;
  });

  return (
    <div id="categoria">
      <div id="extensionList">
        <h1>Extension List</h1>
      </div>

      {/* filtros */}
      <div className="filters selecao">
        <button
          className={`cursorActive ${filter === "all" ? "activeFilter" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`cursorActive ${filter === "active" ? "activeFilter" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`cursorActive ${filter === "inactive" ? "activeFilter" : ""}`}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </button>
      </div>

      {/* lista de extensões */}
      <div className="divisao">
        {filteredItems.map((item) => (
          <Entry
            key={item.id}
            id={item.id}
            logo={item.logo}
            name={item.name}
            description={item.description}
            ativacao={item.isActive}
            onRemove={removeItem}
            onToggle={toggleActive}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;