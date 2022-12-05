import React, { useState } from "react";
import List from "./components/Items/List";
import NewItem from "./components/NewItem/NewItem";

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
      console.log(updated);
      return updated;
    });
  };

  function DeleteHandler(taskId) {
    changeItem((prevItems) => {
      return prevItems.filter((task) => task.id !== taskId);
    });
  }

  return (
    <div className="App">
      <NewItem onAddNewItem={addNewItemHandler} />
      <List items={curItems} delete={DeleteHandler} />
    </div>
  );
}

export default App;
