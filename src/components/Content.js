import GroceryList from "./GroceryList";

const Content = ({ items, setItems }) => {
  return (
    <>
      <GroceryList items={items} setItems={setItems} />
    </>
  );
};

export default Content;
