import { Circle, CheckIcon, SquarePen } from "lucide-react";
import EditTask from "./EditTask";
import { useState } from "react";
export default function Task({
  tasks,
  onTaskClick,
  onSaveEditedTask,
  onDeleteTask,
}) {
  const [editingTaskId, setEditingTaskId] = useState(null);

  function onEditTaskClick(taskId) {
    setEditingTaskId(taskId);
  }
  function offEditTaskClick() {
    setEditingTaskId(null);
  }

  return (
    <ul className="flex flex-col gap-2 bg-slate-50 rounded-md shadow">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex gap-2 p-4 bg-[#2C2C2C]  text-[#F3F4F4]  rounded-lg"
        >
          {task.id === editingTaskId ? (
            // EDITING VERSION
            <EditTask
              task={task}
              onSaveEditedTask={onSaveEditedTask}
              offEditTaskClick={offEditTaskClick}
              onDeleteTask={onDeleteTask}
            />
          ) : (
            // NORMAL VERSION (iplement like another component later...)
            <>
              <button onClick={() => onTaskClick(task.id)}>
                {task.isCompleted ? <CheckIcon /> : <Circle />}
              </button>

              <div className="flex justify-between w-full">
                <button
                  className={`bg-[#2C2C2C]  text-[#F3F4F4] rounded-full ${task.isCompleted && "line-through"}`}
                >
                  {task.title}
                </button>
                <button
                  className="hover:bg-[#F3F4F4]/50 transition"
                  onClick={() => onEditTaskClick(task.id)}
                >
                  <SquarePen />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
