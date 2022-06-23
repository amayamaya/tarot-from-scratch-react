import { useEffect, useState } from 'react';
import { getTarotDeck } from './services/fetch-utils';
import TarotDeck from './TarotDeck';

import './App.css';

function App() {
  const [tarotDeck, setTarotDeck] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 40;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const cards = await getTarotDeck(from, to);

      setTarotDeck(cards);
    }
    fetch();
  }, [page]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className="buttons">
        <button onClick={() => setPage(page - 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <TarotDeck tarotDeck={tarotDeck} />
    </>
  );
}

export default App;
