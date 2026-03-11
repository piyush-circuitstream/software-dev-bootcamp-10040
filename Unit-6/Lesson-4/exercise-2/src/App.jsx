import { useState } from 'react'
import './App.css'

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



  return (
    <>
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  )
}

export default App
