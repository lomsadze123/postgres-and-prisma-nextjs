"use server";

import prisma from "@/lib/prisma";

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
  console.log(result);
};

export default addPost;
