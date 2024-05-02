"use client";

import useForm from "@/hooks/useForm";

const Form = () => {
  const { id, addPostWithReset, pending, router } = useForm();

  return (
    <form
      className="flex flex-col justify-center items-center gap-5 text-black"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        if (
          !formData.get("username") ||
          !formData.get("title") ||
          !formData.get("content")
        ) {
          return;
        }

        router.replace("/");
        await addPostWithReset(formData);
      }}
    >
      <input
        className="outline-none border-b-2 border-gray-400 py-2 px-4 w-full max-w-80 placeholder-gray-500 rounded-md"
        type="text"
        name="username"
        placeholder="Write you username..."
      />
      <input
        className="outline-none border-b-2 border-gray-400 py-2 px-4 w-full max-w-80 placeholder-gray-500 rounded-md"
        type="text"
        name="title"
        placeholder="Title of music..."
      />
      <input
        className="outline-none border-b-2 border-gray-400 py-2 px-4 w-full max-w-80 placeholder-gray-500 rounded-md"
        type="text"
        name="content"
        placeholder="Link like this https://www.youtube.com/watch?v=wITRo4OBjJU&list=RD1AQx9y99N_g&index=15"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        disabled={pending}
      >
        {pending && !id
          ? "Submitting..."
          : pending && id
          ? "Editing..."
          : !id
          ? "Submit"
          : "Edit"}
      </button>
    </form>
  );
};

export default Form;
