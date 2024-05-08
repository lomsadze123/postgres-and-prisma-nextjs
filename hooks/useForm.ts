import addPost from "@/actions/addPost";
import editPost from "@/actions/editPost";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const useForm = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const addPostWithReset = async (formData: FormData, username: string) => {
    setPending(true);
    try {
      id
        ? await editPost(id, formData, username)
        : await addPost(formData, username);
      router.replace("/musics");
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setPending(false);
    }
  };

  return { id, addPostWithReset, pending, router };
};

export default useForm;
