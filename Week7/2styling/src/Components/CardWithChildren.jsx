//children is a special prop provided every component
//contains whatever is in between the opening and closing tag
function CardWithChildren({ children }) {
  //alert(children);
  return (
    // you can overwrite external styling with inline styling
    <div className="my-card" style={{ backgroundColor: "lightblue" }}>
      <h2>Card With Children</h2>
      <div className="card-description">{children}</div>
    </div>
  );
}

export default CardWithChildren;
