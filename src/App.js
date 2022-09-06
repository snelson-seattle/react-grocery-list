import { useState } from "react";
import Header from "./components/Header";
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
  return (
    <>
      <Header />
      <Content items={items} setItems={setItems} />
      <Footer length={items.length} />
    </>
  );
}

export default App;
