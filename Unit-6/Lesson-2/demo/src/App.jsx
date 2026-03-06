import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("Modal opened!");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Modal closed!");
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>My App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <br />

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>My Modal Component</h2> {/* This is passed as children */}
          <p>My content for modal</p> {/* This is passed as children */}
        </Modal>
      )}
    </>
  )
}

export default App
