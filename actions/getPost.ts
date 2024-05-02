"use server";

import prisma from "@/lib/prisma";

const getPosts = async () => {
  try {
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
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export default getPosts;
