//At the top of the components is where you import
import MyComponent from "./components/MyComponent";
import CallBack from "./components/CallBack";
function App() {
  //Before the return statement
  //This is where you can write any javascript functions your
  //component might need.
  //you can create variables or data here
  let text = "Hello React";
  //Return statement - return the markup that the component uses
  //return statement can ONLY return ONE element
  console.log("Testing App");
  //function to handle the click
  function clickHandler() {
    alert("Button Clicked");
    console.log("test");
  }
  return (
    <>
      {/* You can write javascript inside of your markup by using {} */}
      <h2>{text}</h2>
      <p>Testing</p>
      <button onClick={clickHandler}>Click Me</button>
      {/* You can also define functions inline with arrow syntax */}
      <button onClick={() => alert("Button 2 clicked")}>Click me also</button>
      {/* To pass data to a child component. These are called props */}
      <MyComponent name="Josh" age="41" text={text}></MyComponent>
      {/* You can also pass functions down to child components */}
      <CallBack onClick={clickHandler} />
    </>
  );
}

export default App;
