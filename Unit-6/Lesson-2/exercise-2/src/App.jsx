import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';

function App() {
  const [currentValue, setCurrentValue] = useState(0); // Tracks the current value for the button
  const [clickedValue, setClickedValue] = useState(null); // Tracks the value when button is clicked
  const [incrementValue, setIncrementValue] = useState(1); // Increment value for each tick

  useEffect(() => {
    // This function updates the currentValue every second
    const intervalId = setInterval(() => {
      setCurrentValue((prevValue) => prevValue + incrementValue);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [incrementValue]); // Re-run the effect if incrementValue changes

  const handleClick = (value) => {
    // Callback to handle button click and store the value
    setClickedValue(value);
  };

  return (
    <>
      <h1>Current Value: {currentValue}</h1>
      <Button
        text={currentValue.toString()}
        callback={handleClick}
        increment={incrementValue}
      />
      {clickedValue !== null && <p>You clicked the button with value: {clickedValue}</p>}

      <div>
        <button onClick={() => setIncrementValue(incrementValue + 1)}>
          Increase Increment by 1
        </button>
      </div>
    </>
  )
}

export default App
