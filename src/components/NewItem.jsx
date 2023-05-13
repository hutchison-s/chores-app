import { useContext } from "react";
import { ListContext } from "../ListContext";

export default function NewItem() {
    const {list, setList, deleted, setDeleted} = useContext(ListContext);
    
    function handleClearList() {
      const delList = [...list].map(each => each.content);
      setDeleted([...deleted, ...delList]);
      setList([]);
    }

    return (
      <div id='addBox'>
        <label>
          Add to list
          <input type="text" id="newChoreInput" />
        </label>
        <button
          onClick={() => {handleClearList()}}
          type="button"
        >
          Clear List
        </button>
        <button
          type="submit"
        >
          Add Chore
        </button>
      </div>
    )
  }