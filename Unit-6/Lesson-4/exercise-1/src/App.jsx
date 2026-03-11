import './App.css'

function App() {

  function handleOnClickOuterDiv(event) {
    console.log("Outer div clicked!", event)
  }

  function handleOnClickInnerDiv(event) {
    console.log("Inner button clicked!", event)
    event.stopPropagation(); // This will prevent the click event from bubbling up to the outer div
  }

  return (
    <>
      <div id="outerDiv" onClick={handleOnClickOuterDiv}>
        <button id="innerDiv" onClick={handleOnClickInnerDiv}>Click Me!</button>
      </div>
    </>
  )
}

export default App
