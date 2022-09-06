import GroceryItem from "./GroceryItem";

const GroceryList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <GroceryItem key={item.id} checked={item.checked} item={item.item} />
        );
      })}
    </ul>
  );
};

export default GroceryList;
