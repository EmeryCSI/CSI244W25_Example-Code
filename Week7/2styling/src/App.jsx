import MyCard from "./Components/MyCard";
import CardStyledInComponent from "./Components/CardStyledInComponent";
import CardStyledWithProps from "./Components/CardStyledWithProps";
import CardWithChildren from "./Components/CardWithChildren";
import "./App.css";
function App() {
  return (
    <div>
      <h1>App</h1>
      <MyCard title={"Card Title"} description="Card Description" />
      <CardStyledInComponent />
      <CardStyledWithProps
        backgroundColor="darkgreen"
        titleColor="lightseagreen"
        descriptionColor="mintcream"
        buttonColor="forestgreen"
      />
      {/* whatever you put between the opening and closing tags
      goes to a special prop named children */}
      <CardWithChildren>
        <p>This is a child paragraph</p>
        <button>Child Button</button>
        <div>
          <h3>Nested container</h3>
          <p>You can put anything in here</p>
        </div>
      </CardWithChildren>
    </div>
  );
}

export default App;
