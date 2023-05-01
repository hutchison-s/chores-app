import { useContext } from "react";
import { ListContext } from "../ListContext";



export default function Restore() {
    const { list, setList, deleted, setDeleted, id, setId } = useContext(ListContext);

    function contentToObject(content, id) {
      const obj = {id: id.toString(), priority: false, complete: false, content: content};
      return obj;
    }

    function handleRestore(e) {
      if (e.target.value !== " ") {
        const newChore = {id: id.toString(), priority: false, complete: false, content: e.target.value};
        setId(i => i + 1);
        setList([...list, newChore]);
        const newDeleted = [...deleted];
        newDeleted.splice(deleted.indexOf(e.target.value), 1);
        setDeleted(newDeleted);
        e.target.value = " ";
      }
    }

    function handleRestoreAll() {
      const delList = [...deleted].splice(1);
      setDeleted([" "]);
      const restoreList = [];
      delList.forEach((item, idx) => {
        restoreList.push(contentToObject(item, id+idx))
      });
      setId(i => i + delList.length);
      setList([...list, ...restoreList]);
    }

    return (
        <div style={(deleted.length > 1) ? {opacity: "1"} : {opacity: "0.3"}} className="restoreBox">
          <label>
            Restore
            <select
              onInput={(e) => {handleRestore(e)}}
              disabled={(deleted.length > 1) ? false : true}>
              {deleted.map((itemContent, idx) => (
                <option value={itemContent} key={idx}>
                  {itemContent}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={() => {setDeleted([" "])}}
            type="button"
            style={(deleted.length > 1) ? {cursor: "pointer"} : null}>
            Delete All
          </button>
          <button
            onClick={() => {handleRestoreAll()}}
            type="button"
            style={(deleted.length > 1) ? {cursor: "pointer"} : null}>
            Restore All
          </button>
        </div>
      )
  }