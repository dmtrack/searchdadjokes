import { get } from '../axios';

const url = process.env.API_URL;

export default async function getJokes(searchTerm: string) {
    const jokes = await get(`${url}/jokes/search?query=${searchTerm}`);
    return jokes;
}
