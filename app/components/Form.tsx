"use client";

import addPost from "@/actions/addPost";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

const Form = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const { pending } = useFormStatus();

  const addPostWithReset = async (formData: FormData) => {
    ref.current?.reset();
    await addPost(formData);
  };

  return (
    <form ref={ref} action={addPostWithReset}>
      <input type="text" name="title" placeholder="title..." />
      <input type="text" name="content" placeholder="content..." />
      <button type="submit">{pending ? "Submitting..." : "Submit"} </button>
    </form>
  );
};

export default Form;
