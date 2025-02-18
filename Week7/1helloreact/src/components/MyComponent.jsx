//We can pass data to a component via props
//props is an object that contains the information
//that came from the parent component
function MyComponent({ text, name, age }) {
  //check props
  //console.log(props);
  return (
    <>
      <h2>{text}</h2>
      <p>{name}</p>
      <p>{age}</p>
    </>
  );
}

export default MyComponent;
