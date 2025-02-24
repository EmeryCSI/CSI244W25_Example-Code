import React, { useState } from "react";

function FormState() {
  // Initialize state object for form inputs using useState hook
  // formData holds all form field values in a single object
  // setFormData is the function used to update this state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Track whether the form has been submitted
  // This boolean state is used to toggle between form and success message display
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Event handler for input changes
  // This function is called every time a user types in any input field
  // e.target.name corresponds to the input's 'name' attribute
  // e.target.value contains the current value of the input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread operator preserves all other form fields
      [name]: value, // Update only the changed field using computed property name
    }));
  };

  // Event handler for form submission
  // Prevents default form submission behavior
  // Updates submission status and logs form data
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submission
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2>Form State</h2>
      <hr />
      {/* Conditional rendering based on submission status */}
      {/* If not submitted, show the form, otherwise show the success message */}
      {!isSubmitted ? (
        // Form element with onSubmit event handler
        <form onSubmit={handleSubmit}>
          {/* Each form field is wrapped in a div for organization */}
          {/* Input fields use controlled component pattern: */}
          {/* - value is controlled by React state */}
          {/* - onChange handler updates the state */}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          {/* Email input field follows same pattern as username */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Textarea for message follows same controlled component pattern */}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
          </div>

          <button type="submit">Submit Form</button>
        </form>
      ) : (
        // Success message shown after form submission
        // Displays all submitted form data
        <div>
          <h3>Thank you for submitting!</h3>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Message: {formData.message}</p>
        </div>
      )}

      {/* Debug section: Shows current state in real-time */}
      {/* JSON.stringify with parameters for pretty printing */}
      <div>
        <h3>Current State:</h3>
        <div>{JSON.stringify(formData, null, 2)}</div>
      </div>
    </div>
  );
}

export default FormState;
