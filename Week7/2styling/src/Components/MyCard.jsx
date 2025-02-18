//lets pass a title and a description to this card
function MyCard({ title, description }) {
  return (
    <div className="my-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
      <button className="card-button">Learn More</button>
    </div>
  );
}

export default MyCard;
