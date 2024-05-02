import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { PostTypes } from "@/types/types";

const Post = ({ title, content, author, id, authorId }: PostTypes) => {
  return (
    <div className="border-2 text-center border-blue-600 w-full max-w-xs rounded-md p-4 mt-4 text-lg">
      <div className="flex items-center justify-between">
        <Link href={`/add-post/${id}`}>✏️</Link>
        <h4 className="font-bold">{title}</h4>
        <DeleteButton id={id} authorId={authorId ?? ""} />
      </div>
      <a
        className="my-4 block text-blue-500 hover:text-blue-700 font-semibold"
        target="_blank"
        href={content || "#"}
      >
        To start playing music, click here
      </a>

      <h3 className="italic text-right">By {author}</h3>
    </div>
  );
};

export default Post;
