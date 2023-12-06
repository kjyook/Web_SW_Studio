import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req, res);

    const bullentins = await prismadb.bulletin.findMany();

    return res.status(200).json(bullentins);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};

export default handler;
