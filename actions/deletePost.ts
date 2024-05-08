"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const deletePost = async (id: string) => {
  try {
    const existPost = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        author: true,
      },
    });

    if (!existPost) {
      console.error("Post not found");
      return;
    }

    const deletedPost = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    console.log("Post deleted:", deletedPost);
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

export default deletePost;
