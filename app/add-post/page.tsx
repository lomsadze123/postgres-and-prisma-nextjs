import { getServerSession } from "next-auth";
import Form from "../components/Form";
import { authOptions } from "@/lib/options";
import Link from "next/link";

const AddPost = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main className="text-white text-center">
      {session ? (
        <>
          <h1 className="text-3xl font-bold mb-4 mt-16">Add Post</h1>
          <Form username={session?.user.username ?? ""} />
        </>
      ) : (
        <h1 className="text-3xl font-bold text-white text-center mt-20">
          You are not signed in. Get back to Sign In Page
          <Link className="text-blue-600 hover:text-blue-400" href="/sign-in">
            {" "}
            (Click here)
          </Link>
        </h1>
      )}
    </main>
  );
};

export default AddPost;
