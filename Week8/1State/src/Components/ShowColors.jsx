function ShowColors({ background, foreground }) {
  return (
    <h2>
      <hr />
      <p>State can be passed to child components via props</p>
      <p>Background: {background}</p>
      <p>Foreground: {foreground}</p>
    </h2>
  );
}

export default ShowColors;
