import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values ,setValues] = useState({
    firstName : "",
    lastName : "",
    email : ""
  })

  const [submitted, setSubmitted] = useState(false);  
  const [valid, setValid] = useState(false);

const HandleFNChange =(event) => {
  setValues({...values, firstName: event.target.value})
}

const HandleLNChange =(event) => {
  setValues({...values, lastName: event.target.value})
}

const HandleEmailChange =(event) => {
  setValues({...values, email: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitted(true);
}

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit} > 
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
        onChange={HandleFNChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span>Please enter a first name</span> : null }
        
        {/* Uncomment the next line to show the error message */}
        {/* { <span id="first-name-error">Please enter a first name</span>}  */}
        <input
          onChange={HandleLNChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          onChange={HandleEmailChange}
          value={values.emailName}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}