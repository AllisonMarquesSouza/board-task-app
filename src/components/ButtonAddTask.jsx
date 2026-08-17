import { Plus } from "lucide-react";
import NewTask from "./NewTask";
import { useState } from "react";

export default function AddTaskBoardBtn({ onAddNewTask }) {
  //creating state to open newTask component...
  const [isAddingTask, setIsAddingTask] = useState(false);

  function activeNewTask() {
    setIsAddingTask(true); //if is true, then it'll show the NewTask component...
  }
  function cancelNewTask() {
    setIsAddingTask(false); //if is true, then it'll show the NewTask component...
  }

  return (
    <>
      <button
        onClick={activeNewTask}
        className="flex items-center mt-auto w-full p-2 relative bg-slate-900 text-slate-50 rounded-full"
      >
        <Plus />
        <span className="absolute left-1/2 -translate-x-1/2">Add Task</span>
      </button>

      {isAddingTask && (
        <NewTask cancelNewTask={cancelNewTask} onAddNewTask={onAddNewTask} />
      )}
    </>
  );
}
/*
change something
    ↓
change STATE
    ↓
React re-renders
    ↓
UI reflects the state
*/
