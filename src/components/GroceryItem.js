const GroceryItem = ({ checked, item }) => {
  return (
    <li className="item">
      <input type="checkbox" checked={checked} />
      <label>{item}</label>
    </li>
  );
};

export default GroceryItem;
