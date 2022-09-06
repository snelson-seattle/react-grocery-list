import GroceryItem from "./GroceryItem";

const GroceryList = ({ items, setItems }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <GroceryItem
            key={item.id}
            checked={item.checked}
            item={item.item}
            id={item.id}
            items={items}
            setItems={setItems}
          />
        );
      })}
    </ul>
  );
};

export default GroceryList;
