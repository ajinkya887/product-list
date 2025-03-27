import React from "react";

const Items = () => {
  const items = ["Ajinkya", "Annirudha"];
  return (
    <div>
      <h1>List of Items</h1>
      <h2>Using the && operator</h2>
      {items.length > 0 && <p>Items list to be shown here.....</p>}
      <h2>Using teranary operator</h2>
      {items.length > 0 ? (
        <p>items list to be shown here.....</p>
      ) : (
        <p>No items found</p>
      )}

      <h2>Rendering the list</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default Items;
