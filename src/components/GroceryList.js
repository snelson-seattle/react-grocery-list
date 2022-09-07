import GroceryItem from "./GroceryItem";

const GroceryList = ({ items, setItems }) => {
  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => {
            return (
              <GroceryItem
                key={item.id}
                item={item}
                items={items}
                setItems={setItems}
              />
            );
          })}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          There are currently no items in your grocery list.
        </p>
      )}
    </>
  );
};

export default GroceryList;
