import {useRef} from "react";
import { FaPlus } from "react-icons/fa";

const AddItemForm = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="add-item">Add Item</label>
      <input
        type="text"
        autoFocus
        id="add-item"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        ref={inputRef}
      />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItemForm;
