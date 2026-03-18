import './App.css'
import { useReducer } from 'react';

const initialState = {
  count: 0
};

// ANOTHER EXAMPLE
// const personState = {
//   name: "",
//   age: 0,
//   email: ""
// }

// function personReducer(state, action) {
//   return {
//     ...state,
//     [action.type]: action.value
//   }
//   // switch (action.type) {
//   //   case 'updateName':
//   //     return { ...state, name: action.payload };
//   //   case 'updateAge':
//   //     return { ...state, age: action.payload };
//   //   case 'updateEmail':
//   //     return { ...state, email: action.payload };
//   //   default:
//   //     return state;
//   // }
// }

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h1>User Reducer Demo</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

      {/* ANOTHER EXAMPLE
      <input type="text" onChange={(e) => dispatch({ type: 'name', value: e.target.value })} placeholder="Name" />
      <input type="text" onChange={(e) => dispatch({ type: 'age', value: e.target.value })} placeholder="Age" />
      <input type="text" onChange={(e) => dispatch({ type: 'email', value: e.target.value })} placeholder="Email" /> */}
    </>
  )
}

export default App
