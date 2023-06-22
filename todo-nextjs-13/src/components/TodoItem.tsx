"use client";
import React from "react";

type TodoPropType = {
  id: string;
  title: string;
  isDone: boolean;
  toggleTodo: (id: string, isDone: boolean) => void;
  deleteTodo: (id: string) => void;
};
function TodoItem({ id, title, isDone, toggleTodo, deleteTodo }: TodoPropType) {
  return (
    <div className="flex justify-between items-center max-w-sm gap-2 my-2">
      <div className="flex gap-2">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={isDone}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id} className="peer-checked:line-through">
          {title}
        </label>
      </div>
      <button
        className="px-3 py-2 bg-zinc-700 hover:bg-zinc-400 rounded-xl"
        onClick={(e) => deleteTodo(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
