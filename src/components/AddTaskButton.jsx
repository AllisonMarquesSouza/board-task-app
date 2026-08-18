import { Plus } from "lucide-react";
import NewTask from "./NewTask";
import { useState } from "react";

export default function AddTaskButton({ onAddNewTask, board, boards }) {
  //creating state to open newTask component...
  const [isAddingTask, setIsAddingTask] = useState(false);

  function activeNewTask() {
    setIsAddingTask(true);
  }
  function cancelNewTask() {
    setIsAddingTask(false);
  }

  return (
    <>
      <button
        onClick={activeNewTask}
        className="relative mt-auto flex min-h-11 w-full items-center rounded-full bg-[#2C2C2C] p-2 text-[#F3F4F4] transition hover:bg-[#2C2C2C]/50"
      >
        <Plus />
        <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">Add Task</span>
      </button>

      {isAddingTask && (
        <NewTask
          cancelNewTask={cancelNewTask}
          onAddNewTask={onAddNewTask}
          board={board}
          boards={boards}
        />
      )}
    </>
  );
}
