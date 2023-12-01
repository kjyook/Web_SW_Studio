import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req, res);

        const { drugId } = req.query;

        if (typeof drugId !== 'string') {
            throw new Error('Invalid ID');
        }

        if (!drugId) {
            throw new Error('Invalid ID');
        }

        const movie = await prismadb.drug.findUnique({
            where: {
                id: drugId
            }
        });

        if (!movie) {
            throw new Error('Invalid ID')
        }

        return res.status(200).json(movie);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
};

export default handler;