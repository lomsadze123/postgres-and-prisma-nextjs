const Post = ({ id, title, content, author }: any) => {
  return (
    <div className="border border-red-500 p-4">
      <h3>{author}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Post;
