import { client, checkError } from './client';

export async function getTarotDeck(from = 0, to = 18) {
  const response = await client
    .from('tarot')
    .select('*', { count: 'exact' })
    .range(from, to);

  return checkError(response);
}

export async function getTarotCard(id) {
  const response = await client.from('tarot').select('*').match({ id }).single();

  return checkError(response);
}
