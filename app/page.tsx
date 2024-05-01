import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";

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

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Feed</h1>
      <Link href="/add-post">Add Post</Link>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          author={post.author?.name}
        />
      ))}
    </main>
  );
}
