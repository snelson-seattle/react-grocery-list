import { FaTrashAlt } from "react-icons/fa";

const GroceryItem = ({ checked, item, id, items, setItems }) => {
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    <li className="item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
      />
      <label>{item}</label>
      <FaTrashAlt role="button" tabIndex="0" />
    </li>
  );
};

export default GroceryItem;
