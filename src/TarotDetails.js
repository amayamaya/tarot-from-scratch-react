import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTarotCard } from './services/fetch-utils';

export default function TarotDetails() {
  const params = useParams();
  const [tarotCard, setTarotCard] = useState({});
  useEffect(() => {
    async function goFetch() {
      const data = await getTarotCard(params.id);

      setTarotCard(data);
    }

    goFetch();
  }, [params.id]);

  function handleCardClick() {
    window.open(`${tarotCard.link}`);
  }

  return (
    <>
      <div className="card-detail" onClick={handleCardClick}>
        <div className="card-data">
          <h2>{tarotCard.name}</h2>
          <h4>{tarotCard.Affirmation}</h4>
          {/* <p>{tarotCard.keywords / 1}</p> */}
          <img src={`/cards/${tarotCard.img}`} />
          <p>{tarotCard.Astrology}</p>
          <p>{tarotCard.arcana}</p>
        </div>
      </div>
    </>
  );
}
