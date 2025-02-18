function CardStyledWithProps({
  backgroundColor = "navy",
  titleColor = "darkgray",
  descriptionColor = "gray",
  buttonColor = "cornflowerblue",
}) {
  //we can use props in our styled object
  const styles = {
    card: {
      background: backgroundColor,
      borderRadius: "5px",
      padding: "20px",
      maxWidth: "300px",
      margin: "20px",
      boxShadow: "0, 2px, 4px #000",
    },

    title: {
      color: titleColor,
      fontSize: "1.5rem",
      marginBottom: "10px",
    },

    text: {
      color: descriptionColor,
      marginBottom: "15px",
      lineHeight: 2,
    },

    button: {
      background: buttonColor,
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
      <h2 style={styles.title}>Card Styled With Props</h2>
      <p style={styles.text}>Text Styled With Props</p>
      <button style={styles.button}>Learn More</button>
    </div>
  );
}

export default CardStyledWithProps;
