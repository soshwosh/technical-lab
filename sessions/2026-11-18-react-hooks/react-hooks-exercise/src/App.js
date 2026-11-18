import './App.css';
import { useState, useReducer} from 'react';

function appleShoppingReducer(appleCount, action) {
  switch (action.type) {
    case 'add':
      {return appleCount + 1;}
    case 'remove':
      {return appleCount - 1;}
    default:
      {return appleCount;}
  }
}

function App() {

  const [count, setCount] = useState(0);
  const [appleCount, dispatch] = useReducer(appleShoppingReducer, 10);

  function handleAddApple() {
    dispatch({type: "add"});
  }

  function handleRemoveApple() {
    dispatch({type: "remove"});
  }

  return (
    <div className="App">
      <div>
        <h1>useState Example</h1>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>

      <div>
        <h1>useReducer Example</h1>
        <p>Apples: {appleCount}</p>
        <button onClick={handleAddApple}>Add</button>
        <button onClick={handleRemoveApple}>Remove</button>
      </div>
    </div>
  );
}

export default App;
