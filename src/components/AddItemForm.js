import { FaPlus } from "react-icons/fa";

const AddItemForm = ({ newItem, setNewItem, handleSubmit }) => {
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
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItemForm;
