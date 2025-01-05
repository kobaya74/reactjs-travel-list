import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import Stats from './Stats';
import PackingList from './PackingList';

export default function App() {
  const [items, setItems] = useState([]);
  // Derived states: never define and use new state like below
  // const [numItems, setNumItems] = useState(0);
  // Always derive state by creating new variable like this: (in this example we will move variable to the Stats component])
  // const numItems = items.length;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you wan to delete all items?'
    );

    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
