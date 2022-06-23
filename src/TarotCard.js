import { Link } from 'react-router-dom';

export default function TarotCard({ card }) {
  return (
    <Link to={`/tarot/${card.id}`}>
      <div className="card">
        <h3>{card.name}</h3>
        <p>{card.arcana}</p>
        <img src={card.image} />
      </div>
    </Link>
  );
}
