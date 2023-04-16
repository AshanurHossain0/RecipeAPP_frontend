import React, { useState } from 'react';
import './ArrayInputForm.css'; // Import custom CSS file for styling
import { postRecipe } from "../../scripts/recipes"
import { Redirect } from "react-router-dom"


const ArrayInputForm = () => {
  const [name, setName] = useState('');
  const [process, setProcess] = useState('');
  let [items, setItems] = useState([]);
  let [flag, setFlag] = useState(false)

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, '']);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    items = items.filter((item) => {
      return item.trim().length !== 0;
    })
    if (process.trim().length === 0) {
      alert("You have to provide recipe making process")
      return
    }
    else if (items.length === 0) {
      alert("You have to add some item")
      return
    }
    else {
      setFlag(true);
      postRecipe({ name, items, process })
    }
    // Do something with the submitted data
  };

  if (flag) return <Redirect to="/dashboard" />;
  return (
    <div className='form-cont'>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">
          Name of Recipe:
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="form-label">
          Making Process:
          <textarea
            className="form-textarea"
            value={process}
            onChange={(event) => setProcess(event.target.value)}
            required
          />
        </label>
        {items.map((item, index) => (
          <div key={index} className="form-item-container">
            <input
              className="form-input"
              type="text"
              value={item}
              onChange={(event) => handleInputChange(event, index)}
            />
            <button
              type="button"
              className="form-button form-remove-button"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="form-button form-add-button"
          onClick={handleAddItem}
        >
          Add Item
        </button>
        <button type="submit" className="form-button form-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ArrayInputForm;