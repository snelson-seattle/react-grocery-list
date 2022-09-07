import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const API_URL = "http://localhost:3500/api/groceries";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error("Did not receive expected data.");
        }
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        console.error(error.message); // remove this console log before production
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // create an aysnc IIFE to retrieve items from backend on component load
    (async () => await fetchItems())();
  }, []);

  const addItem = async (item) => {
    const itemObj = { item };
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemObj),
      });
      if (!response.ok) {
        throw Error("Failed to add item.");
      }
      const result = await response.json();
      const listItems = [...items, result];
      setItems(listItems);
    } catch (error) {
      console.error(error);
    }
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
      <main>
        {isLoading ? (
          <p className="loading">Loading Items...</p>
        ) : fetchError ? (
          <p className="error">{`Error: ${fetchError}`}</p>
        ) : (
          <Content items={items} setItems={setItems} />
        )}
      </main>
      <Footer length={items.length} />
    </>
  );
}

export default App;
