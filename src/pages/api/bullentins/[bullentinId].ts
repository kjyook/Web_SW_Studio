import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req, res);

    const { bulletinId } = req.query;

    if (typeof bulletinId !== "string") {
      throw new Error("Invalid ID");
    }

    if (!bulletinId) {
      throw new Error("Invalid ID");
    }

    const bullentin = await prismadb.bulletin.findUnique({
      where: {
        id: bulletinId,
      },
    });

    if (!bullentin) {
      throw new Error("Invalid ID");
    }

    return res.status(200).json(bullentin);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};

export default handler;
