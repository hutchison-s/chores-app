import { useContext, useState } from "react";
import { ListContext } from "../ListContext";
import setStorage from "../functions/localStorage";

export default function ToDo({item, idx}) {
    const { list, setList, deleted, setDeleted } = useContext(ListContext);
    const [complete, setComplete] = useState(item.complete);
    const [priority, setPriority] = useState(item.priority);
    const [itemDeleted, setItemDeleted] = useState(false);

    function deleteItem(index, list, setList) {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    function handleCompleteChange() {
        setComplete(!complete);
        item.complete = !complete;
        setStorage(list, deleted);
    }

    function handleDoubleClick() {
        setItemDeleted(true);
        setTimeout(()=>{
            deleteItem(idx, list, setList);
            setItemDeleted(false);
            setDeleted([...deleted, item.content]);
        }, 300)
    }

    function handlePriorityChange() {
        setPriority(!priority);
        item.priority = !priority;
        setStorage(list, deleted);
    }

    return (
      <div className={`${itemDeleted ? "deleted" : ""} ${priority ? "priority item" : "item"} ${complete ? "complete" : ""}`} onClick={console.log(item.id)}>
        <input 
            className="checkbox"
            type="checkbox"
            checked={complete} 
            onChange={()=>{handleCompleteChange()}}/>
        <h1
            onDoubleClick={() => {handleDoubleClick()}}
            className={complete ? "complete" : null}>
            {item.content}
        </h1>
        <label className="priorityBox"><small>{priority ? "Priority" : "Not a priority"} <input 
            type="checkbox"
            checked={priority} 
            onChange={()=>{handlePriorityChange()}}
        /></small></label>
      </div>
    )
}