"use client";

import { useState } from "react";
import deletePost from "@/actions/deletePost";

const DeleteButton = ({ id }: { id: string }) => {
  const [isPending, setIsPending] = useState(false);

  const handleDelete = async () => {
    setIsPending(true);
    try {
      await deletePost(id);
    } catch (error) {
      console.error("Error occurred while deleting:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button onClick={handleDelete} disabled={isPending}>
      {isPending ? "..." : "❌"}
    </button>
  );
};

export default DeleteButton;
