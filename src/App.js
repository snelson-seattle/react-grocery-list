import { useState } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import Content from "./components/Content";
import Footer from "./components/Footer";

const dummyData = [
  { id: 1, checked: false, item: "Eggs" },
  { id: 2, checked: true, item: "Peanut Butter" },
  { id: 3, checked: false, item: "Milk" },
  { id: 4, checked: false, item: "Bread" },
];

function App() {
  const [items, setItems] = useState(dummyData);
  const [newItem, setNewItem] = useState("");
  
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const groceryItem = { id, checked: false, item };
    const listItems = [...items, groceryItem];
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
