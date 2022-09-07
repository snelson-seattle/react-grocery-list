import { FaTrashAlt } from "react-icons/fa";

const GroceryItem = ({ item, items, setItems }) => {
  const API_URL = "http://localhost:3500/api/groceries";

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item._id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const updatedItem = {...item, checked: !item.checked};

    const response = await fetch(`${API_URL}/${id}`, {method: "PATCH", headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(updatedItem)});

    console.log(response);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item._id !== id);
    setItems(listItems);

    const response = await fetch(`${API_URL}/${id}`, {method: "DELETE"});
    if (response) {
      console.log(response);
    }
  };

  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item._id)}
      />
      <label style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item._id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default GroceryItem;
