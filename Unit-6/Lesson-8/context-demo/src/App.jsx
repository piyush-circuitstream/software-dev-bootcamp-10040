import { useReducer } from 'react';
import './App.css'
import CounterProvider from './CounterContext';
import DisplayCount from './components/DisplayCount';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import ResetButton from './components/ResetButton';


function App() {
  return (
    <>
      <h1>User Reducer Demo</h1>

      <CounterProvider>
        <DisplayCount />
        <IncrementButton />
        <DecrementButton />
        <ResetButton />
      </CounterProvider>
    </>
  )
}

export default App
