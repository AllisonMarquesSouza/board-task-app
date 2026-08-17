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
          className="flex gap-2 p-4 bg-slate-900 text-slate-50 rounded-lg"
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
                <button className="bg-slate-900 text-white rounded-full">
                  {task.title}
                </button>
                <button onClick={() => onEditTaskClick(task.id)}>
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
