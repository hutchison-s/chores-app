import { useState, useContext, useEffect } from "react";
import { ListContext } from "../ListContext";
import ToDo from "./ToDo";

export default function Items() {
    const { list } = useContext(ListContext);
    const [filter, setFilter] = useState("");
    const filteredList = [...list].filter(chore => chore.content.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div className="itemsContainer">
        <input 
          id="searchBar"
          type="search" 
          placeholder="Search chores..." 
          onInput={(e)=>{setFilter(e.target.value)}}/>
        {filteredList.map((item, idx) => (<ToDo item={item} idx={idx} key={item.id}/>))}
      </div>
    );
  }