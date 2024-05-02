"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const addPost = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "Beka",
        },
      },
    },
  });
  revalidatePath("/");
  console.log(result);
  redirect("/");
};

export default addPost;
