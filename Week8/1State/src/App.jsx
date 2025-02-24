import { useState } from "react";
import "./App.css";
import ShowColors from "./Components/ShowColors";
import IntroToState from "./Components/IntroToState";
import FormState from "./Components/FormState";

function App() {
  //background and foreground color tracked by state
  //background starts at black foreground at white
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [foregroundColor, setForegroundColor] = useState("#ffffff");

  return (
    // styling the entire app using the state variables
    <div
      style={{
        backgroundColor,
        color: foregroundColor,
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div>
        <label>Choose a background color</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <label>Choose a text color</label>
        <input
          type="color"
          value={foregroundColor}
          onChange={(e) => setForegroundColor(e.target.value)}
        />
      </div>
      <h1>useState</h1>
      <ShowColors background={backgroundColor} foreground={foregroundColor} />
      <IntroToState />
      <FormState />
    </div>
  );
}

export default App;
