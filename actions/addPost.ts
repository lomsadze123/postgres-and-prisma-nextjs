"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const addPost = async (formData: FormData) => {
  try {
    const username = (formData.get("username") as string).trim();
    const title = (formData.get("title") as string).trim();
    const content = (formData.get("content") as string).trim();

    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          create: {
            name: username,
          },
        },
      },
    });

    console.log(result);
    revalidatePath("/");
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export default addPost;
