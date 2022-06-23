import TarotCard from './TarotCard';

export default function TarotDeck({ tarotDeck }) {
  return (
    <div className="cards">
      {tarotDeck.map((card, i) => (
        <TarotCard key={card.name + i + card.id} card={card} />
      ))}
    </div>
  );
}