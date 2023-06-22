import TodoItem from "@/components/TodoItem";
import { prisma } from "@/lib/db";
import Link from "next/link";

async function toggleTodo(id: string, isDone: boolean) {
  "use server";
  await prisma.tODO.update({ where: { id }, data: { isDone } });
}
async function deleteTodo(id: string) {
  "use server";
  await prisma.tODO.delete({ where: { id } });
}
export default async function Home() {
  const todo = await prisma.tODO.findMany();
  return (
    <>
      <header>
        <div className="flex justify-between item-center">
          <p className="text-xl">Todo</p>
          <Link
            href="/new"
            className="bg-red-500 hover:bg-red-700 transition-all ease-in-out duration-100 px-3 py-2 rounded-lg text-white"
          >
            New
          </Link>
        </div>
      </header>
      <div className="">
        {todo.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}
