import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const person = {
    name: "Piyush",
    age: 25,
    city: "Calgary"
  };

  let clickHandler = (user = 'User') => {
    // console.log("Button Clicked!");
    alert(`Button Clicked! - ${user}`);
  }

  let employees = [
    { id: 1, name: "Alice", department: "HR" },
    { id: 2, name: "Bob", department: "Engineering" },
    { id: 3, name: "Charlie", department: "Marketing" }
  ];

  let nameOfEmployees = [];
  for (let e of employees) {
    nameOfEmployees.push(<h4 key={e.id}>{e.name}</h4>);
  }


  let content;

  if (count < 5) {
    content = <Button text={123} onClick={() => console.log("Less")} />;
  } else {
    content = <Button text="More Content!" onClick={() => console.log("More")} />;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h2>Welcome to React, {person.name}!</h2>
        <p>Age: {person.age}</p>
        <p>City: {person.city}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button />

        {/* Ternary Conditional Check */}
        {count < 5 ? (<Button text="Add Content!" onClick={() => console.log("Added")} />) :
          (<Button text="Update Content!" onClick={() => console.log("Updated")} />)
        }

        {/* Logical && Conditional Check */}
        {count >= 5 && <Button text="Remove Content!" onClick={() => console.log("Removed")} />}

        {/* If-Else Conditional Check */}
        {content}

        {/* rendering the list of employees */}
        {employees.map(e => <p key={e.id}>{e.name} - {e.department}</p>)}

        {/* rendering the list of employee names */}
        {nameOfEmployees}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App