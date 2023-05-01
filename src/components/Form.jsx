import { useContext } from 'react';
import NewItem from './NewItem';
import Restore from './Restore';
import { ListContext } from '../ListContext';

export default function Form() {
    const { list, setList, id, setId } = useContext(ListContext);

    function handleSubmit(e) {
      let inputEl = document.getElementById("newChoreInput");
      e.preventDefault();
      const newChore = {id: id.toString(), priority: false, complete: false, content: inputEl.value};
      setId(i => i + 1);
      setList([...list, newChore]);
      inputEl.value = "";
    }

    return (
      <form
        onSubmit={(e) => {handleSubmit(e)}}
        className="userControls">
        <h1 id="title">CHORES</h1>
        <NewItem />
        <Restore />
        
      </form>
    );
  }