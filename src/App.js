import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

function App (){
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({}); 

  const handleInput = (e)=>{
    setCurrentItem({
      text:e.target.value,
      key:Date.now()
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = currentItem;
    console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...items, newItem];
      setItems(newItems);
      setCurrentItem({key:'',text:''});
    }
  }

  const deleteItem = (key) => {
    const filteredItems = items.filter(item =>item.key!=key);

    setItems([...filteredItems])
  }
  const setUpdate = (e) => {
    const {value, id} = e.target;
    items.map(item=>{
      if(item.key == id){
        item.text = value;
      }
    });

    setItems([...items]);

    // setItems({
    //   items:items
    // });
  }
    return (
      <div className='App'>
        <header>
          <form id="to-do-form" onSubmit={addItem}>
            <input type="text" placeholder='Enter Text' value={currentItem.text} onChange={handleInput}/>
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItems 
        deleteItem={deleteItem} 
        setUpdate = {setUpdate}
        items={items}></ListItems>
      </div>
    );
}

export default App;
