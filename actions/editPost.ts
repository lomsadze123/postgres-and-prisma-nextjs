"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const editPost = async (postId: string, formData: FormData) => {
  try {
    const username = (formData.get("username") as string).trim();
    const title = (formData.get("title") as string).trim();
    const content = (formData.get("content") as string).trim();

    const existingPost = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: true,
      },
    });

    if (!existingPost) {
      console.error("Post not found");
      return;
    }

    // Update author name if it's changed
    if (existingPost.author?.username !== username && existingPost.authorId) {
      await prisma.user.update({
        where: {
          id: existingPost.authorId,
        },
        data: {
          username,
        },
      });
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        content,
      },
    });

    console.log("Post updated:", updatedPost);
    revalidatePath("/");
  } catch (error) {
    console.error("Error editing post:", error);
  }
};

export default editPost;
