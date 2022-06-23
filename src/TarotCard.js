import { Link } from 'react-router-dom';

export default function TarotCard({ card }) {
//   console.log(card.img);
  return (
    <Link to={`/tarot/${card.id}`}>
      <div className="card">
        <h2>{card.name}</h2>
        <p>{card.arcana}</p>
        <img src={`/cards/${card.img}`} />
      </div>
    </Link>
  );
}
