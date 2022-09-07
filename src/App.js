import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shopping-list")) || []
  );
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem("shopping-list", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const groceryItem = { id, checked: false, item };
    const listItems = [...items, groceryItem];
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // return if no item was entered, (the required input should not allow this to happen)
    if (!newItem) return;

    // add item
    addItem(newItem);
    // reset the input
    setNewItem("");
  };

  return (
    <>
      <Header />
      <AddItemForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content items={items} setItems={setItems} />
      <Footer length={items.length} />
    </>
  );
}

export default App;
