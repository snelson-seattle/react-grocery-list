import AddItemForm from "./AddItemForm";
import GroceryList from "./GroceryList";

const Content = ({ items, setItems }) => {
  return (
    <main>
      <AddItemForm items={items} setItems={setItems} />
      <GroceryList items={items} setItems={setItems} />
    </main>
  );
};

export default Content;
