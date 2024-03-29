import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/lib";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { title, description } = JSON.parse(request.body);

  try {
    const data = await prisma.post.create({
      select: {
        id: true,
        title: true,
        description: true,
      },
      data: {
        title: "hello",
        description: description,
      },
    });

    return response.status(200).json({ data });
  } catch (error) {
    return response.status(500).json({ error });
  }
}