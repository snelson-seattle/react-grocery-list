import GroceryList from "./GroceryList";

const Content = ({ items, setItems }) => {
  return (
    <main>
      <GroceryList items={items} setItems={setItems} />
    </main>
  );
};

export default Content;
