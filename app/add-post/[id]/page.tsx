import Form from "@/app/components/Form";
import { authOptions } from "@/lib/options";
import { getServerSession } from "next-auth";

const AddPostDynamic = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1 className="text-center text-white text-2xl my-8">
        Edit name, title or link
      </h1>
      <Form username={session?.user.username ?? ""} />
    </>
  );
};

export default AddPostDynamic;
