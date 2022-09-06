import { useState } from "react";
import GroceryList from "./GroceryList";

const dummyData = [
  { id: 1, checked: false, item: "Eggs" },
  { id: 2, checked: true, item: "Peanut Butter" },
  { id: 3, checked: false, item: "Milk" },
  { id: 4, checked: false, item: "Bread" },
];

const Content = () => {
  const [items, setItems] = useState(dummyData);

  return (
    <main>
      <GroceryList items={items} setItems={setItems} />
    </main>
  );
};

export default Content;
