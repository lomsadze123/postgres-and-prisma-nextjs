"use server";

import prisma from "@/lib/prisma";

const getPosts = async (email: string) => {
  try {
    const post = await prisma.post.findMany({
      where: {
        author: {
          email,
        },
      },
      include: {
        author: {
          select: {
            username: true,
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
