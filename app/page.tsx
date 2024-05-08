import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-white mt-40 md:mt-60">
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Sign in or Register
      </h1>
      <div className="flex space-x-4 tet-1xl md:text-2xl">
        <Link
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          href="/register"
        >
          Register
        </Link>
        <Link
          className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded"
          href="/sign-in"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}
