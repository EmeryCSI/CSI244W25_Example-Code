function CardStyledInComponent() {
  //we can style from inside the component
  //Style object
  const styles = {
    card: {
      background: "navy",
      borderRadius: "5px",
      padding: "20px",
      maxWidth: "300px",
      margin: "20px",
      boxShadow: "0, 2px, 4px #000",
    },

    title: {
      color: "darkgray",
      fontSize: "1.5rem",
      marginBottom: "10px",
    },

    text: {
      color: "gray",
      marginBottom: "15px",
      lineHeight: 2,
    },

    button: {
      background: "cornflowerblue",
      color: "white",
      border: "none",
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Card Styled In Component</h2>
      <p style={styles.text}>Text Styled in component</p>
      <button style={styles.button}>Learn More</button>
    </div>
  );
}

export default CardStyledInComponent;
