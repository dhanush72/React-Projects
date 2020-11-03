import { useState } from "react";
import "./birthday.css";
import data from "./Data";
import List from "./List";

function Remainder() {
  const [people, setPeople] = useState(data);
  const handleAdd = () => {
    console.log(data);
    setPeople(data);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Remainder</h3>
        <List people={people} />
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default Remainder;
