import { useState } from "react";

function IntroToState() {
  console.log("----Intro to State rendering----");
  //state variable to store name, starts as empty string
  const [name, setName] = useState("");

  // Initialize state with a random number between 1-100
  // useState returns an array with two elements:
  // 1. The current state value (number)
  // 2. A function to update the state (setNumber)
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  // Handler function to generate a new random number
  // This function will be called when the "Generate" button is clicked
  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  // Handler function to increment the number by 1
  // This function will be called when the "Add 1" button is clicked
  const handleIncrement = () => {
    if (number >= 100) {
      return;
    }
    setNumber((prevNumber) => prevNumber + 1);
  };

  // Handler function to decrement the number by 1
  // This function will be called when the "Subtract 1" button is clicked
  const handleDecrement = () => {
    if (number <= 0) {
      return;
    }
    setNumber((prevNumber) => prevNumber - 1);
  };
  //function that fires when the name input changes
  //the html event is passed in here
  const handleNameChange = (event) => {
    //console.log(event);
    setName(event.target.value);
  };

  return (
    <div>
      <hr />
      <h2>Type your name</h2>
      <input onChange={handleNameChange} type="text" />
      <h4>Your name is {name}</h4>
      <hr />
      <h2>Random Number Generator</h2>

      {/* Display the current number from state */}
      <h2>Current Number: {number}</h2>

      {/* Button group for all our actions */}
      <div>
        {/* Each button calls its respective handler function when clicked */}
        <button onClick={handleRandomNumber}>Random 1-100</button>

        <button onClick={handleIncrement}>Add 1</button>

        <button onClick={handleDecrement}>Subtract 1</button>
      </div>

      {/* Educational notes section */}
      <div className="tutorial-notes">
        <h3>How This Works:</h3>
        <ul>
          <li>The useState hook manages our variables</li>
          <li>
            When state changes, React automatically re-renders the component
          </li>
          <li>Handler functions keep our code organized and reusable</li>
          <li>
            We use the setter function (setNumber) to update state, never modify
            state directly
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IntroToState;
