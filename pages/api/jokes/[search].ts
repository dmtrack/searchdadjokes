import type { NextApiRequest, NextApiResponse } from 'next';
import getJokes from '../../../lib/getJokes';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;
    const currentJokesData = getJokes(`${query.search}`);
    const jokes = await currentJokesData;
    res.status(200).json({ jokes: jokes });
}
