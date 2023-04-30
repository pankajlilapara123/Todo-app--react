import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  const addItem = (event) => {
    event.preventDefault();
    const newItem = currentItem.trim();
    if (newItem) {
      setItems([...items, newItem]);
      setCurrentItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="todo">
      <h1>To-Do List</h1>
      <form onSubmit={addItem}>
        <input type="text" value={currentItem} placeholder='Add Activity' onChange={(event) => setCurrentItem(event.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
