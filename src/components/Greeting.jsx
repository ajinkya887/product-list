import React, { useState } from "react";

const Greeting = (props) => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Good morning {name}</h1>
      <input
        type="text"
        placeholder="Enter you name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={(e) => setName("")}>Reset</button>
    </div>
  );
};

export default Greeting;
