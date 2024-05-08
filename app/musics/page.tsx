import getPosts from "@/actions/getPost";
import Link from "next/link";
import React from "react";
import Post from "../components/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/options";
import SignOut from "../components/SignOut";

const Musics = async () => {
  const session = await getServerSession(authOptions);
  const posts = session?.user.email && (await getPosts(session?.user.email));

  return session ? (
    <main className="flex min-h-screen flex-col items-center text-white">
      <h1 className="my-8 text-xl text-center md:text-3xl max-w-xl">
        <span className="font-bold">Welcome {session.user.username} ! </span>
        Write some of your best musical compositions
      </h1>
      <Link
        href="/add-post"
        className="bg-blue-500 rounded-md p-2 mb-8 text-xl"
      >
        Add Music
      </Link>
      <SignOut />
      <div className="flex flex-wrap gap-8 w-full justify-evenly">
        {posts != "" &&
          posts?.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              author={post.author?.username}
            />
          ))}
      </div>
    </main>
  ) : (
    <h1 className="text-3xl font-bold text-white text-center mt-20">
      You are not signed in. Get back to Sign In Page
      <Link className="text-blue-600 hover:text-blue-400" href="/sign-in">
        {" "}
        (Click here)
      </Link>
    </h1>
  );
};

export default Musics;
