import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function page() {
  async function submitServerAction(data: FormData) {
    "use server";
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string") {
      throw new Error("Invalid TODO");
    }
    await prisma.tODO.create({ data: { title, isDone: false } });
    redirect("/");
  }
  return (
    <>
      <header>
        <div className="flex justify-between item-center">
          <p className="text-xl">Todo</p>
        </div>
      </header>
      <form action={submitServerAction}>
        <input
          type="text"
          name="title"
          className="bg-transparent border-2 border-gray-700 p-3 rounded-md w-full my-4"
        />
        <div className="flex items-center gap-4 justify-end">
          <Link href="..">Cancel</Link>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 transition-all ease-in-out duration-100 px-3 py-2 rounded-lg text-white"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
