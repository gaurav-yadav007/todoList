import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    const val = items[id];
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    setIsCompleted((prevValue) => {
      return [...prevValue, val];
    });
  }

  return (
    <div>
      <div>
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={addItem}>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem}
                  onChecked={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="heading">
            <h1>Completed-List</h1>
          </div>

          <div>
            <ul>
              {isCompleted.map((itm) => {
                return <li>{itm}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
