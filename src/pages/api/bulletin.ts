import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { title, content } = req.body;

      const bulletin = await prismadb.bulletin.create({
        data: {
          title: title,
          content: content,
        },
      });

      console.log("create", title, content, bulletin);

      res.status(200).json(bulletin);
    }

    if (req.method === "DELETE") {
      const { bulletinId } = req.body;

      const bullentin = await prismadb.bulletin.delete({
        where: {
          id: bulletinId,
        },
      });

      console.log("delete", bulletinId);

      res.status(200).json(bullentin);
    }

    res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};

export default handler;
