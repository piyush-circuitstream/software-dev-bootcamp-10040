import { useState } from 'react'
import './App.css'
import styled from 'styled-components';
import { css } from '@emotion/css';
import Button from './components/Button';
import SubmitButton from './components/SubmitButton';

function App() {

  const [formData, setFormData] = useState({
    username: "",
    firstname: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    console.log("Input changed!", event)
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const validateForm = () => {
    let formErrors = {};

    if (!formData.username) {
      formErrors.username = "Username is required";
    }

    if (formData.username.length < 3) {
      formErrors.username = "Username must be at least 3 characters long";
    }

    if (!formData.firstname) {
      formErrors.firstname = "First name is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if there are no errors
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    //validate form call
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
    } else {
      console.log("Form has errors:", errors);
    }
  }


  const redTitle = {
    color: 'red',
  }

  const CustomTitle = styled.h1`
    color: purple;
    font-size: 30px;
    text-align: center;
  `;

  return (
    <>
      <h1 style={{ color: 'blue' }}>Inline Style</h1>
      <h1 style={redTitle}>Inline Style with variable</h1>
      <h1 className='greenyellow'>External Style</h1>

      <CustomTitle>Styled Component(CSS-in-JS)</CustomTitle>

      <h1 className={css`color: orange;`}>Style with Emotion(CSS-in-JS)</h1>

      <Button />
      <SubmitButton />

      {/* <form onSubmit={handleSubmit}>
        <label>Username:
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            onChange={handleChange} />
        </label>
        <label>Firstname:
          <input
            type="text"
            name="firstname"
            placeholder="John"
            onChange={handleChange} />
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        {errors.firstname && <p style={{ color: "red" }}>{errors.firstname}</p>}
        <button type="submit">Submit</button>
      </form> */}
    </>
  )
}

export default App
