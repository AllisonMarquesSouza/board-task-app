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
        className="flex items-center mt-auto w-full p-2 relative bg-[#2C2C2C] text-[#F3F4F4] hover:bg-[#2C2C2C]/50 transition rounded-full"
      >
        <Plus />
        <span className="absolute left-1/2 -translate-x-1/2">Add Task</span>
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
