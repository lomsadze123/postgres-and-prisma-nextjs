"use server";

import prisma from "@/lib/prisma";

const getPosts = async () => {
  const post = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return post;
};

export default getPosts;
