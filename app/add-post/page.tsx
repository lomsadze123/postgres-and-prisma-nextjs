import addPost from "@/actions/addPost";

const AddPost = () => {
  return (
    <main>
      <h1>Add Post</h1>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title..." />
        <input type="text" name="content" placeholder="content..." />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default AddPost;
