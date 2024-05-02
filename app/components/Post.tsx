const Post = ({ title, content, author }: any) => {
  return (
    <div className="border border-blue-500 w-full max-w-xs rounded-md p-4 mt-4">
      <h4 className="font-bold text-center">{title}</h4>
      <p className="my-4">{content}</p>
      <h3 className="italic text-right">By {author}</h3>
    </div>
  );
};

export default Post;
