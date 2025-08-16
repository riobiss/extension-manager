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

/* 
===== MANUAL DE LEITURA DO CÓDIGO =====

1️⃣ Fluxo principal:
  - React monta <Items />.
  - items contém o estado inicial (data.json).
  - filter contém o estado do filtro ("all", "active", "inactive").
  - filteredItems é calculado com base em items e filter.

2️⃣ Filtros (linha 30):
  - Cada botão muda o estado filter com setFilter().
  - React re-renderiza a lista filtrada automaticamente.
  - Classe "activeFilter" adiciona estilo visual ao botão selecionado.

3️⃣ Lista de extensões (linha 43):
  - filteredItems.map() percorre cada item filtrado.
  - Para cada item, cria um <Entry /> e passa:
      • id, logo, name, description
      • ativacao → estado ativo/inativo
      • onRemove → função que remove item
      • onToggle → função que alterna ativo/inativo

4️⃣ Entry.js (linha 5):
  - Recebe props do Items.
  - const imagens = require.context() → importa todas as imagens da pasta assets/images.
  - src={imagens(`./${props.logo}`)} → pega a imagem específica pelo nome.
  - onClick do botão chama props.onRemove(id) → remove item.
  - onChange do checkbox chama props.onToggle(id) → alterna ativo/inativo.
  - JSX mostra:
      • img, h2 com nome, p com descrição
      • botão Remove
      • switch para ativação

5️⃣ Estados e re-renderizações:
  - Sempre que setItems ou setFilter é chamado, o componente Items é re-renderizado.
  - filteredItems recalcula automaticamente e a lista de <Entry /> atualiza.
  - Cada Entry recebe novas props se o item foi alterado.

6️⃣ Dicas de leitura:
  - useState cria estados mutáveis que causam re-render.
  - Funções removeItem e toggleActive usam a **função anterior do estado** (prev) para evitar inconsistências.
  - require.context é útil para importar muitas imagens sem precisar fazer import manual.
  - JSX em Entry e Items é o que determina a estrutura visual.

*/