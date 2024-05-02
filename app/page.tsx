import getPosts from "@/actions/getPost";
import Post from "./components/Post";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center text-white">
      <h1 className="my-8 text-xl text-center md:text-3xl">
        Write some of your best musical compositions
      </h1>
      <Link
        href="/add-post"
        className="bg-blue-500 rounded-md p-2 mb-8 text-xl"
      >
        Add Music
      </Link>
      <div className="flex flex-wrap gap-8 w-full justify-evenly">
        {posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author?.name}
            authorId={post.authorId}
          />
        ))}
      </div>
    </main>
  );
}
