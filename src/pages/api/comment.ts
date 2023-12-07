import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { content, bullentinId } = req.body;
      const { currentUser } = await serverAuth(req, res);

      const comment = await prismadb.comment.create({
        data: {
          userId: currentUser.email,
          content: content,
          bulletin: {
            connect: {
              id: bullentinId,
            },
          }
        },
      });

      console.log("create", content);

      res.status(200).json(comment);
    }

    if (req.method === "DELETE") {
      const { commentId } = req.body;

      const comment = await prismadb.comment.delete({
        where: {
          id: commentId,
        },
      });

      console.log("delete", commentId);

      res.status(200).json(comment);
    }

    res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};

export default handler;
