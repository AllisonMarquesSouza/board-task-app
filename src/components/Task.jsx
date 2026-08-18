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
    <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">
      {tasks.map((task) => (
        <li
          key={task.id}
          draggable //allowing to drag this element
          /*
          “At the moment this task starts being dragged,
          save its ID so the place where it is dropped knows which task it was.”
           */
          onDragStart={(event) => {
            event.dataTransfer.setData("taskId", task.id);
          }}
          className="flex gap-2 rounded-lg bg-[#2C2C2C] p-3 text-[#F3F4F4] sm:p-4"
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
              <button
                className="shrink-0 rounded p-1 transition hover:bg-[#F3F4F4]/15"
                onClick={() => onTaskClick(task.id)}
              >
                {task.isCompleted ? <CheckIcon /> : <Circle />}
              </button>

              <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
                <button
                  className={`min-w-0 flex-1 break-words rounded-full bg-[#2C2C2C] text-left text-[#F3F4F4] ${task.isCompleted && "line-through"}`}
                >
                  {task.title}
                </button>
                <button
                  className="shrink-0 rounded p-1 transition hover:bg-[#F3F4F4]/50"
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
