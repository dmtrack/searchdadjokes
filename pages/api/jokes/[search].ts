import type { NextApiRequest, NextApiResponse } from 'next';
import { get } from '../../../axios';

const url = process.env.API_URL;

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;
    const jokes = await get(`${url}/jokes/search?query=${query.search}`);
    // const jokes = await currentJokesData;
    res.status(200).json({ jokes: jokes });
}
