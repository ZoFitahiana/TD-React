import React, { useState } from "react";

interface ListItem {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<ListItem[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const add = () => {
    if (name.trim() === "") {
      alert("Veuillez entrer un nom valide.");
      return;
    }

    const newItem: ListItem = {
      id: count,
      name: name.trim()
    };

    setList([...list, newItem]);
    setCount(count + 1);
    setName("");
  };

  const deletes = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const updates = (id: number) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, name };
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={add}>Add</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deletes(item.id)}>Delete</button>
            <button onClick={() => updates(item.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
