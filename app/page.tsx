import getPosts from "@/actions/getPost";
import Post from "./components/Post";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center text-white">
      <Link href="/add-post" className="bg-blue-500 rounded-md p-2 mt-8">
        Add Post
      </Link>
      {posts?.map((post) => (
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
