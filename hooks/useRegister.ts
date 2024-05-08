import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const useRegister = () => {
  const [info, setInfo] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    username: z.string().min(1),
    email: z.string().email("Invalid email format").min(1),
    password: z.string().min(1),
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const validationResult = schema.safeParse(info);
      if (validationResult.success === false) {
        setError(validationResult.error.errors[0].message);
        setLoading(false);
        return;
      }

      const res = await fetch("api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (res.ok) {
        setInfo({ username: "", email: "", password: "" });
        setError("");
        router.replace("/api/auth/signin");
        router.refresh();
      } else {
        setError("Something went wrong");
        setLoading(false);
      }
    } catch (error) {
      setError("An error occurred");
      setLoading(false);
    }
  };

  return { handleInput, handleSubmit, info, error, loading };
};

export default useRegister;
