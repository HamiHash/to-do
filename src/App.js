import React, { useState } from "react";
import List from "./components/Items/List";
import NewItem from "./components/NewItem/NewItem";
import styles from "./App.module.css";

const DUMMY_ITEMS = [
  {
    id: "e1",
    text: "Listen to music",
  },
  {
    id: "e2",
    text: "Watch Netflix",
  },
  {
    id: "e3",
    text: "Play game",
  },
  {
    id: "e4",
    text: "Walk the dog",
  },
];

function App() {
  const [curItems, changeItem] = useState([
    {
      id: "e1",
      text: "Listen to music",
    },
    {
      id: "e2",
      text: "Watch Netflix",
    },
    {
      id: "e3",
      text: "Play game",
    },
    {
      id: "e4",
      text: "Walk the dog",
    },
  ]);

  const addNewItemHandler = (data) => {
    changeItem((prevItems) => {
      const updated = [data, ...prevItems];
      return updated;
    });
  };

  return (
    <div className="App">
      <NewItem onAddNewItem={addNewItemHandler} />
      <List items={curItems} />
    </div>
  );
}

export default App;
