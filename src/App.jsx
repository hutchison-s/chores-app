import "./index.css";
import { useState, useEffect } from "react";
import { ListContext } from "./ListContext";
import Form from './components/Form';
import Items from "./components/Items";
import setStorage from "./functions/localStorage";

let initialList;
let initialDeleted;
let nextId;

const data = JSON.parse(window.localStorage.getItem("choresData"));
if (data) {
  initialList = [...data.list]
  initialDeleted = [...data.deleted]
  nextId = data.list.length > 0 ? Math.max(...data.list.map(each => Number(each.id))) + 1 : 0;
} else {
  initialList = [
    {id: 2000, priority: false, complete: false, content: "Use form to add"},
    {id: 2001, priority: false, complete: false, content: "Double click to delete"},
    {id: 2002, priority: false, complete: false, content: "Use form to restore or clear history"}
  ];
  initialDeleted = [" "];
  nextId = 0;
}

export default function App() {
  const [list, setList] = useState(initialList);
  const [deleted, setDeleted] = useState(initialDeleted);
  const [id, setId] = useState(nextId);
  const props = {
    list: list,
    setList: setList,
    deleted: deleted,
    setDeleted: setDeleted,
    id: id,
    setId: setId
  }
  useEffect(()=>{
    setStorage(list, deleted);
  }, [list, deleted])
  return (
    <ListContext.Provider value={props}>
      <div className="App">
        <Form />
        <Items />
      </div>
    </ListContext.Provider>
  );
}




